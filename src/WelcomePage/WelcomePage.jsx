
const WelcomePage = ({showWelcomePage, setShowWelcomePage}) => {
  return (
    <div className={`${showWelcomePage?'block' : 'hidden'} ${`DisplayModal && 'hidden'`} bg-blue-500 flex flex-col text-center p-5 justify-center items-center fixed top-20 mt-6 `} >
        <h1>SoulBlog</h1>
        <p>you are welcome to this website</p>
    </div>
  )
}

export default WelcomePage