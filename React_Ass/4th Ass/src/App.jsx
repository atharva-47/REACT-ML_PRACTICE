import { useState, useEffect } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { store } from './store/store'
import { checkToken } from './store/authSlice'
import Q1 from './components/Q1'
import Q2 from './components/Q2'
import Q3 from './components/Q3'
import Q4 from './components/Q4'

function MainApp() {
  const [currentQuestion, setCurrentQuestion] = useState('Q1')
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkToken())
  }, [dispatch])

  if (!user) {
    return <Q2 />
  }

  return (
    <div>
      <h1>Assignment 4</h1>
      <div>
        <button onClick={() => setCurrentQuestion('Q1')}>Q1</button>
        <button onClick={() => setCurrentQuestion('Q3')}>Q3</button>
        <button onClick={() => setCurrentQuestion('Q4')}>Q4</button>
        <button onClick={() => setCurrentQuestion('Q2')}>Logout</button>
      </div>
      <div>
        {currentQuestion === 'Q1' && <Q1 />}
        {currentQuestion === 'Q2' && <Q2 />}
        {currentQuestion === 'Q3' && <Q3 />}
        {currentQuestion === 'Q4' && <Q4 />}
      </div>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App
