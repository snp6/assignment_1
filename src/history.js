import {Component} from 'react'

import HistoryItem from './historyItem'

import './history.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {search: '', isEmpty: false}

  filteredList = event => {
    this.setState({search: event.target.value})
  }

  onDelete = id => {
    let result = initialHistoryList
    const index = result.findIndex(todo => todo.id === id)
    initialHistoryList.splice(index, 1)
    result = initialHistoryList
    console.log(index)
    console.log(initialHistoryList)
    if (result.length === 0) {
      this.setState({isEmpty: true})
    } else {
      this.setState({isEmpty: false})
    }
  }

  render() {
    const {search} = this.state
    const {isEmpty} = this.state
    const searchResults = initialHistoryList.filter(each =>
      each.domainUrl.toLowerCase().includes(search.toLowerCase()),
    )

    let histContent
    if (
      searchResults.length === 0 ||
      isEmpty === true ||
      initialHistoryList.length === 0
    ) {
      histContent = <p>There is no history to show</p>
    } else {
      histContent = (
        <ul className="result-container">
          {searchResults.map(items => (
            <HistoryItem
              key={items.id}
              history={items}
              click={this.onDelete}
              testId="delete"
            />
          ))}
        </ul>
      )
    }

    return (
      <>
        <nav>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="icon"
              alt="search"
            />
            <input
              type="search"
              onChange={this.filteredList}
              placeholder="search
            history"
            />
          </div>
        </nav>
        <div>{histContent}</div>
      </>
    )
  }
}

export default History
