import React from 'react';
import servies from './service';
import Medicine from './Medicine';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    medicines: [],
  };

  getMedicine = () => {
    servies.getMedicines()
      .then(res => {
        this.setState({
          ...this.state,
          medicines: res.data
        })
      })
      .catch(err => {
        console.log('some')
        console.log(err)
      })
  }

  addMedicine = () => {
    let medicine = {
      "hsnCode": "hsnCode-" + Math.random().toString(),
      "name": "test_Medicine-" + Math.random().toString(),
      "price": Math.random(),
      "brandName": "testBrandName-" + Math.random().toString(),
      "stockist": "tet-stockist-" + Math.random().toString(),
    }
    servies.addMedicine(medicine)
      .then(res => {
        this.setState({
          ...this.state,
          medicines: [...this.state.medicines, res.data]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteMedicine = id => {
    servies.deleteMedicine(id)
      .then(_ => {
        this.getMedicine()
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getMedicine()
  }

  render() {
    return (
      <ScrollView>
        {this.state.medicines.map(medicine => {
          return (
            <Medicine key={medicine._id} medicine={medicine} deleteMedicine={this.deleteMedicine} />
          )
        }
        )}
        <Button title="add" onPress={this.addMedicine}>Add</Button>
        <Button title="refresh" onPress={this.getMedicine}>Refresh</Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
