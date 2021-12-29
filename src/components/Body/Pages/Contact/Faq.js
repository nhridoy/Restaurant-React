import { Accordion, AccordionHeader, AccordionItem } from "reactstrap";

const Faq = () => {
  const toggleAccordion = (e) => {
    e.target.parentNode.nextElementSibling.classList.toggle("show");
  };
  return (
    <div>
      <h2>FAQ</h2>
      <Accordion open="1" toggle={function noRefCheck() {}}>
        <AccordionItem>
          <AccordionHeader onClick={(e) => toggleAccordion(e)} targetId="1">
            Accordion Item 1
          </AccordionHeader>
          <AccordionItem className="collapse" accordionId="1">
            <strong>This is the first item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </AccordionItem>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader onClick={(e) => toggleAccordion(e)} targetId="2">
            Accordion Item 2
          </AccordionHeader>
          <AccordionItem className="collapse" accordionId="2">
            <strong>This is the second item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </AccordionItem>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader onClick={(e) => toggleAccordion(e)} targetId="3">
            Accordion Item 3
          </AccordionHeader>
          <AccordionItem className="collapse" accordionId="3">
            <strong>This is the third item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </AccordionItem>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default Faq;
