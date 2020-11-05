const SignUpTypeIcon = ({ user }) => {
  if (user.password) return <span>Regular</span>  // this should be our logo
  if (user.facebookID) return <i aria-hidden className="fab fa-facebook fa-lg text-blue-600"></i>
  if (user.googleID) return <span className='google-icon w-4'></span>
}


export default SignUpTypeIcon