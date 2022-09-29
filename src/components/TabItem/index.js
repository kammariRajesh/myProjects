import './index.css'

const TabItem = props => {
  const {tabDetails, activateTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const tabActivate = () => {
    activateTab(tabId)
  }

  const className = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${className}`}
        onClick={tabActivate}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
