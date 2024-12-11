import React, { useState } from 'react'
// @ts-expect-error import can be cause error for ts as submodule
import * as Icons from '@icons/src/index'
import styles from './icons.module.scss'

type IconComponentType = React.ComponentType<{ width: number; height: number }>

// IconViewer Component
const IconViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [copied, setCopied] = useState('')

  // Filter icons based on the search term
  const filteredIcons = Object.entries(Icons).filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Handle copy to clipboard
  const handleCopy = (iconName: string) => {
    navigator.clipboard.writeText(iconName).then(() => {
      setCopied(iconName)
      setTimeout(() => setCopied(''), 2000)
    })
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Vaultera Icon Explorer</h1>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search icons..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className={styles.grid}>
            {filteredIcons.length > 0 ? (
              filteredIcons.map(([name, IconComponent]) => {
                const Icon = IconComponent as IconComponentType
                return (
                  <div key={name} className={styles.card}>
                    <div className={styles.iconContainer}>
                      <Icon width={50} height={50} />
                    </div>
                    <p className={styles.iconName}>{name}</p>
                    <button className={styles.copyButton} onClick={() => handleCopy(name)}>
                      {copied === name ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                )
              })
            ) : (
              <p>No icons found.</p>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default IconViewer
