export default () => {
  return (
    <>
      <div className='footer'>
        Footer
      </div>
      <style jsx>
        {`
          .footer::after {
            content: "";
            display: block;
            height: 10px;
            width: 100%;
            background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
          }
        `}
      </style>
    </>
  )
}