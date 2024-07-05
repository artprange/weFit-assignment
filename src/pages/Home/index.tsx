import { CardsContainer, MovieContainer } from './styles'
import { useEffect, useState, CSSProperties } from 'react'
import { fetchMovieData } from '../../services/fetchMovieData'
import { Button } from '../../components/Button'
import { useCart } from '../../context/CartContext'
import { ClipLoader } from 'react-spinners'

interface MovieDataTypes {
  id: number
  title: string
  price: number
  image: string
}

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  color: '#FFFFFF',
}

export const Home = () => {
  const [movies, setMovies] = useState<MovieDataTypes[]>([])
  const [loading, setLoading] = useState(true)

  const { addToCart, cart } = useCart()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieData()
        if (movieData && movieData.products) {
          setMovies(movieData.products)
        } else {
          console.error('Invalid movie data format:', movieData)
        }
      } catch (error) {
        console.error('Error fetching movie data:', error)
      } finally {
        setLoading(false) // Marca o carregamento como completo, independentemente do resultado
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <ClipLoader color={'#fff'} cssOverride={override} size={62} />
  }

  return (
    <CardsContainer>
      {movies.map((movie: MovieDataTypes) => (
        <MovieContainer key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <p>{movie.title}</p>
          <h4>
            <span>R$</span>
            {movie.price.toFixed(2)}
          </h4>
          <Button
            movieId={movie.id}
            count={cart.find((item) => item.id === movie.id)?.quantity || 0}
            addToCart={() => addToCart({ ...movie, quantity: 1 })}
          />
        </MovieContainer>
      ))}
    </CardsContainer>
  )
}
