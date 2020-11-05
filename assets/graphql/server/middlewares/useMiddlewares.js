import dbConnect from './dbConnect'
import isAuthenticated from './isAuthenticated'


const useMiddlewares = (ctx) => {
  dbConnect()
  ctx.req.isAuthenticated = isAuthenticated
}


export default useMiddlewares