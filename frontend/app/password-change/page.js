'use client'

import PasswordChange from "@/app/components/PasswordChange/PasswordChange";
import styles from './password-change.module.css'

export default function passwordChange() {
  return (
    <div className={styles.mainWrapper}>
      <PasswordChange />
    </div>
  )
}