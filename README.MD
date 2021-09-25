Jornada:
========

Comecei criando um projeto em react native via CLI, e vimos o poder de ter uma unica code base. Na sequencia, vimos conceitos como por exemplo estados, imutabilidades e hooks. Passamos por criação de componentes, incorporamos typescript (para poder escalar o projeto) e por fim vimos as possibilidades de debug como por exemplo, atraves da ferramente flipper.


Instalar os modulos:<br>
yarn install

Iniciar o server:<br>
yarn start

Abrir no emulador:<br>
yarn android

### OBS:

- O projeto nao estava abrindo no MAC quando eu clonei direto do git, o sistema falava que nao localizou o arquivo podfile.lock, sendo assim usei esses dois comandos na raiz do diretorio e deu certo:

Step 1:<br>
sudo gem install cocoapods

Step 2:<br>
cd ios && pod install && cd ../ && react-native run-ios

