import "./featured.css";

const Featured = () => {
  return (
      <div className="featured">
          <div className="featuredItems">
              <img src="https://images.pexels.com/photos/19013522/pexels-photo-19013522/free-photo-of-a-house-with-a-swimming-pool-in-the-yard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
              <div className="featuredTitles">
                  <h1>Delhi</h1>
                  <h2>552 Properties</h2>
              </div>
              
          </div>
          <div className="featuredItems">
              <img src="https://images.pexels.com/photos/1330753/pexels-photo-1330753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="featuredImg" />
              <div className="featuredTitles">
                  <h1>Noida</h1>
                  <h2>665 Properties</h2>
              </div>
              
          </div>
          <div className="featuredItems">
              <img src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="featuredImg" />
              <div className="featuredTitles">
                  <h1>Gurgaon</h1>
                  <h2>845 Properties</h2>
              </div>
              
          </div>
    </div>
  )
}

export default Featured