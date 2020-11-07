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
            How do you make holy water?
          </Accordion.Head>
          <Accordion.Body>
            You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id={3}>
          <Accordion.Head>
            What do you call someone with no body and no nose?
          </Accordion.Head>
          <Accordion.Body>
            Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id={4} noBorderBottom>
          <Accordion.Head>
            Why do you never see elephants hiding in trees?
          </Accordion.Head>
          <Accordion.Body>
            Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}


export default FAQAccordion