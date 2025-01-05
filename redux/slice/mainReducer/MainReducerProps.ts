// Define a type for the slice state
export interface MainReducerProps {
  accountNumber: string,
  bankName: string,
  transferType: string,
  transferMode: string,
  amount: string,
  recipientReference: string,
  paymentDetails: string,
  isPaymentError: boolean,
  paymentBiometricsChecking: boolean,
}
