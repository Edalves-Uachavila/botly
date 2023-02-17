import Navegacao from "../components/navegacao"
import "./pages.css"

export const Termos = ()=>{
    return(
        <div className="termos">
            <h5>Termos e Condições de Uso da waydeclick</h5>
            <hr/>
            <div className="text">
                <p>1. <strong>Aceitação dos Termos:</strong> Ao usar a Waydeclick, você concorda com os seguintes Termos e Condições de Uso.</p>
                <p>2. <strong>Segurança:</strong>Você é responsável por manter a segurança das suas informações de acesso ao waydeclick. Você não deve compartilhar essas informações com terceiros.</p>
                <p>3. <strong>Uso apropriado:</strong>Você não deve usar a waydeclick para fins ilegais ou maliciosos. Qualquer conteúdo criado ou visualizado com a waydeclick é de sua responsabilidade.</p>
                <p>4. <strong>Privacidade:</strong>A Waydeclick respeitará e protegerá a sua privacidade.</p>
                <p>5. <strong>Atualizações:</strong>Você deve manter o seu aplicativo atualizado para aproveitar a melhor experiência.</p>
                <p>6. <strong>Acordo de Licença:</strong> Você deve concordar com os termos e condições de uso e licença para usar o aplicativo.</p>
                <p>7. <strong>Renovação:</strong>Você deve renovar sua licença periodicamente para manter acesso ao aplicativo.</p>
                <p>8. <strong>Cobrança:</strong> Você deve pagar as taxas aplicáveis para acessar o aplicativo.</p>
                <p>9. <strong>Restrições:</strong> A Waydeclick pode conter restrições ou limitações que você deve cumprir.</p>
                <p>10.<strong>Isenção de Responsabilidade:</strong> A waydeclick não será responsável por danos ou prejuízos causados pelo seu uso.</p>
                <p>11.<strong>Rescisão:</strong>  Waydeclick se reserva o direito de rescindir o seu acesso ao aplicativo sem aviso prévio.</p>
                <p>12.<strong>Alterações:</strong> A Waydeclick se reserva o direito de alterar os termos e condições de uso a qualquer momento.</p>
            </div>
            <Navegacao text = "voltar para pagina de inscrição" para = "/sign"/>
        </div>
    )
}