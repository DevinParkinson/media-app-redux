import React from 'react';
import { connect } from 'react-redux';
import { Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AppView = ({ app = {} }) => (
  <Container>
    <Link to="/apps">View All Apps</Link>
    <Header as="h3" textAlign="center">{app.name}</Header>
    <Image src={app.logo} />
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Says:</Table.Cell>
          <Table.Cell>{app.description}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { app: state.apps.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(AppView);
