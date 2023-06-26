import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>AmazonPay</h1>
      <div>To test Amazon payment gateway</div>
      <div
        data-ap-widget-type="expressPaymentButton"
        data-ap-signature="wxoRP01u3eEQH2yzprYdwZ57e5xCRbJ1gODoMGUqGuI%3D"
        data-ap-seller-id="A1A9FGYQ5X6NWY"
        data-ap-access-key="AKIAJYZUWAWO2RJ2OBTA"
        data-ap-lwa-client-id="amzn1.application-oa2-client.5c526cf76a814935ab7e37d6a012c694"
        data-ap-return-url="http://localhost:3000/amazonPay"
        data-ap-cancel-return-url="http://localhost:3000/amazonPay"
        data-ap-currency-code="USD"
        data-ap-amount="10000"
        data-ap-note="test"
        data-ap-shipping-address-required="false"
        data-ap-payment-action="None"
      ></div>
    </div>
  );
}

export default App;
