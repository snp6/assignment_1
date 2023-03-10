import './historyItem.css'

const HistoryItem = props => {
  const {history, click, testId} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const delIcon = () => {
    click(id)
  }

  return (
    <>
      <div className="item-container">
        <li className="lists">
          <p className="para">{timeAccessed}</p>
          <div className="img-container">
            <img src={logoUrl} alt="domain logo" className="img" />
          </div>
          <p>{title} </p>
          <p>{domainUrl}</p>
        </li>
        <div className="img-container">
          <button type="button" data-testId={testId} onClick={delIcon}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="img"
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default HistoryItem
