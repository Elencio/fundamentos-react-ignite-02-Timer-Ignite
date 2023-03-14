import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>1:30</td>
              <td>10:00</td>
              <td>
                <Status StatusColor="yellow">Em andammento</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>1:30</td>
              <td>10:00</td>
              <td>
                <Status StatusColor="green">Finalizado</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>1:30</td>
              <td>10:00</td>
              <td>
                <Status StatusColor="green">Finalizado</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>1:30</td>
              <td>10:00</td>
              <td>
                <Status StatusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>1:30</td>
              <td>10:00</td>
              <td>
                <Status StatusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>1:30</td>
              <td>10:00</td>
              <td>
                <Status StatusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
