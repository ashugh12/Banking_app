import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const PaymentTransfer = async() => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  if(!accounts) return ;

  const accountsData = accounts?.data;
  return (
    <section className='payment-transfer'>
      <HeaderBox 
        title="Payment Transfer"
        subtext='Please provide any specific details or notes related to payment transfer'
      />
      <section>
        <PaymentTransferForm  accounts={accountsData} />
      </section>
    </section>


  )
}

export default PaymentTransfer
