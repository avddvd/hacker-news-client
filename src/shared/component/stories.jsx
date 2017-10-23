import 'isomorphic-fetch'
import React from 'react'
import Story from './story'

export default class Stories extends React.Component {
  constructor(props) {
    super(props)
    this.state = { stories: [], category: props.category }
  }

  componentDidMount() {
    const endpoint = '/stories/' + this.state.category
    fetch(endpoint)
      .then(response => response.json())
      .then((res) => {
        this.setState({ stories: [...res] })
      })
      .catch(()=> {})
  }

  render() {
    const storiesList = this.state.stories.map((story, rank) => <Story story={story} rank={rank + 1} />)
    return (
      <table border="0" cellPadding="0" cellSpacing="0" className="stories">
        <tbody>
          {storiesList}
        </tbody>
      </table>
    )
  }
}
