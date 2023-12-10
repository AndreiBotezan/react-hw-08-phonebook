import Section from "components/Section/Section";
import Container from "components/Container/Container";
import Card from "components/Card/Card";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

export default function ContactsPage() {
  return (
    <>
      <Section>
        <Container>
          <Card title={'Phonebook'}>
            <ContactForm />
          </Card>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <Card title={'Contacts'}>
            <Filter />
            <ContactList />
          </Card>
        </Container>
      </Section>
    </>
  );
}