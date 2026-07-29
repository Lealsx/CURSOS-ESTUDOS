git # versionamento de codigo

**Configuração Inicial**
    - **git config --global user.name "Seu Nome":** Define o nome que aparecerá nos seus commits.
    - **git config --global user.email "seuemail@exemplo.com":** Define o e-mail associado aos commits.
    - **ssh -T git@github.com:** Testa a sua conexão SSH com o GitHub para garantir que as permissões e as chaves estão configuradas corretamente.
**Inicialização**
    - **git init:** transforma o diretório atual em um repositório Git em branco.
    - **git clone  [url-do-repositorio]:** baixa um repositório remoto inteiro (incluindo o histórico de commits) para a sua máquina local.
**O Fluxo Diário**    
    - **git status:** mostra o estado atual do repositório, indicando quais arquivos foram modificados, adicionados ou estão prontos para commit.
    - **git add .**: adiciona todas as modificações do diretório atual à área de preparação (staging). Para adicionar um arquivo específico, use git add nome-do-arquivo.ext.
    - **git commit -m "Sua mensagem descritiva":** salva as alterações da área de preparação no histórico do repositório local.
    - **git log:** exibe o histórico de commits da branch atual.
**Branches**    
    - **git branch:** lista todas as branches locais.
    - **git branch -M main:** renomeia a branch atual para main (muito útil para padronizar e evitar erros de nomenclatura ou conflitos ao subir projetos antigos).
    - **git checkout -b [nome-da-nova-branch]:** cria uma nova branch e já muda para ela automaticamente.
    - **git switch [nome-da-branch]:** uma forma mais moderna e exclusiva para alternar entre branches existentes.
    - **git merge [nome-da-branch]:** mescla o histórico e o código da branch especificada para dentro da branch em que você está no momento.
**Sincronização com o Remoto**    
    - **git remote -v:** Lista os repositórios remotos conectados (geralmente chamados de origin).
    - **git remote add origin [url-ou-ssh-do-repositorio]:** Conecta o seu repositório local a um repositório remoto vazio.
    - **git fetch:** Baixa as atualizações do repositório remoto, mas não as mescla com o seu código local.
    - **git pull origin [nome-da-branch]:** Baixa e imediatamente mescla as alterações remotas com a sua branch local atual. Essencial rodar isso se o remoto tiver alterações que você não tem na máquina.
    - **git push -u origin [nome-da-branch]:** Envia os seus commits locais para o repositório remoto.