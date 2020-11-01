import ReactTooltip from 'react-tooltip'


const Tooltip = ({ children, data }) => {
  return (
    <>
      <p data-tip={data}>{children}</p>
      <ReactTooltip effect='solid' />
    </>
  )
}


export default Tooltip