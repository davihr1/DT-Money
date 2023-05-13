import { Header } from "../../components/Heade";
import { Summary } from "../../components/Summary";
import { PriceHighlit, TransactionTable, TransactoinsContainer } from "./style";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactoinsContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width='50%' >Desenvolvimento de sites</td>
              <td>
                <PriceHighlit variant="income">
                  R$ 10.000,00
                </PriceHighlit>
              </td>
              <td>Venda</td>
              <td>24/04/2023</td>
            </tr>

            <tr>
              <td width='50%' >Suporte PC</td>
              <td>
                <PriceHighlit variant="outcome">
                 - R$ 500,00
                </PriceHighlit>
              </td>
              <td>Compra</td>
              <td>24/04/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactoinsContainer>
    </div>
  )
}