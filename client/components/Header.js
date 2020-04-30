export default () => {
  return (
    <>
      <div className='header'>
        Header
      </div>
      <style jsx>
        {`
          .header {
            padding: 8px 0;
            border-width: 10px 0 0;
            border-top-style: solid;
            -o-border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
            border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
          }
        `}
      </style>
    </>
  )
}