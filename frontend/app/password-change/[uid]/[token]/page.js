'use client'

import PasswordChange from "@/app/components/PasswordChange/PasswordChange";
import styles from '../../password-change.module.css'
import {useParams} from "next/navigation";

export default function PasswordChangePage() {
  const { uid, token } = useParams();
  return (
    <div className={styles.mainWrapper}>
      <PasswordChange uid={uid} token={token} />
    </div>
  )
}