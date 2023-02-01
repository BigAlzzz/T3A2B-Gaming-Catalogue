import React from 'react'

const GameDetails = ({ game }) => {

  return (
    <>
        <h5>{game.name}</h5>
        {console.log(game)}
        
        <div className= "Home">
            <main>
            <div className="row">
                <div className="container">
                    <div className="row px-4 my-5">
                        <div className="col-sm-5">
                            <h1 className="font-weigh-light text-center">{game.name}</h1>
                            <p className='mt-4 text-center'>
                                Add game description to game 
                                For years, humans on this earth have searched far and wide for the best game cataloguing website that uses 
                                the MERN Stack. Look no further than BackloGGo, the superior gaming catalogue site built using the MERN stack.
                            </p>
                            <button type="button" className="btn btn-outline-primary">Add to my games</button>
                        </div>
                        <div className="col-sm-7">
                        <img src= {game.background_image} className="img-fluid rounded" alt="dummy"/>
                        </div>
                        
                                <div className="row">
                                <div className="card text-center bg-secondary text-white my-5 py-4">
                                    <div className="card-body">
                                    Review/rate here {game.rating}
                                    
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div className="flex flex-col md:flex-row items-center justify-center"> */}
                                        <div className='col bg-secondary text-white'>
                                            {/* {CardItem(carddata.gamesCard[0])} */}
                                        </div>
                                        <div className='col'>
                                            {/* {CardItem(carddata.gamesCard[1])} */}
                                        </div>
                                        {/* <div className='col'>
                                            {CardItem("profile", "This is where you can view your profile")}
                                        </div>
                                        <div className='col'>
                                            {CardItem("random", "This is where the randomness happens")}
                                        </div> */}
                                        {/* <div class="card" style="width: 18rem;">
                                            <img src="https://picsum.photos/id/200/320/200" class="card-img-top" alt="place" />
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <button type="button" class="btn btn-primary">Go somewhere</button>
                                    
                                            </div>
                                        </div> */}
                                        {/* <div>
                                            {CardItem("game", "this is where you come to game" )}
                                        </div> */}
                                    {/* </div> */}
                                    {/* <div className="col">
                                    hi
                                    </div>
                                    <div className="col">
                                    hi
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        <footer className="py-5 my-5 bg-dark">
            <div className="container px-4">
                <p className="text-center text-white">Copyright &copy; BackloGGo 2023</p>
            </div>
        </footer>
    </div>
    </>
  )
}

export default GameDetails