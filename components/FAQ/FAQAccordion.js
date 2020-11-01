import Accordion from './Accordion'


const FAQAccordion = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item id={1}>
          <Accordion.Head>
            What's the best thing about Switzerland?
          </Accordion.Head>
          <Accordion.Body>
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id={2}>
          <Accordion.Head>
            What's the best thing about Switzerland?
          </Accordion.Head>
          <Accordion.Body>
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id={3}>
          <Accordion.Head>
            What's the best thing about Switzerland?
          </Accordion.Head>
          <Accordion.Body>
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id={4} noBorderBottom>
          <Accordion.Head>
            What's the best thing about Switzerland?
          </Accordion.Head>
          <Accordion.Body>
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}


export default FAQAccordion