import 'dart:io';
import 'dart:math';

// Usamos um enum para representar as jogadas possíveis.
// Isso torna o código mais legível e evita erros de digitação.
enum Move { rock, paper, scissors }

void game() {
  final random = Random();
  int playerScore = 0;
  int computerScore = 0;

  // Game Loop: o laço `while (true)` cria um jogo infinito
  // até que o jogador decida sair.
  while (true) {
    print('---' * 10);
    print('Jokenpo! Escolha sua jogada:');
    print('(1) Pedra, (2) Papel, (3) Tesoura');

    final playerMove = getPlayerMove();
    final computerMove = Move.values[random.nextInt(Move.values.length)];

    print('Você jogou: ${moveToString(playerMove)}');
    print('O computador jogou: ${moveToString(computerMove)}');

    final result = getWinner(playerMove, computerMove);

    if (result == 'Você venceu!') {
      playerScore++;
      print('🎉 Você venceu esta rodada!');
    } else if (result == 'O computador venceu!') {
      computerScore++;
      print('🤖 O computador venceu esta rodada!');
    } else {
      print('😐 Deu empate!');
    }

    print('--- Placar ---');
    print('Você: $playerScore | Computador: $computerScore');
    print('---' * 10);


    // Pergunta se o jogador quer continuar
    print('\nDeseja jogar novamente? (s/n)');
    final answer = stdin.readLineSync()?.toLowerCase();

    if (answer != 's') {
      // Se a resposta não for 's' (sim), o loop é quebrado.
      break;
    }
  }

  print('\nObrigado por jogar! 👋');
}

/// Converte a jogada do tipo Move para uma String em português.
String moveToString(Move move) {
  switch (move) {
    case Move.rock:
      return 'Pedra';
    case Move.paper:
      return 'Papel';
    case Move.scissors:
      return 'Tesoura';
  }
}

/// Pega a entrada do jogador e a converte para o enum `Move`.
/// A função continua pedindo a jogada até que uma opção válida seja inserida.
Move getPlayerMove() {
  while (true) {
    stdout.write('Digite o número da sua escolha: ');
    final choice = stdin.readLineSync();

    switch (choice) {
      case '1':
        return Move.rock;
      case '2':
        return Move.paper;
      case '3':
        return Move.scissors;
      default:
        print('Opção inválida! Por favor, escolha 1, 2 ou 3.');
    }
  }
}

/// Determina o vencedor com base nas jogadas.
String getWinner(Move playerMove, Move computerMove) {
  if (playerMove == computerMove) {
    return 'Empate!';
  }

  if ((playerMove == Move.rock && computerMove == Move.scissors) ||
      (playerMove == Move.scissors && computerMove == Move.paper) ||
      (playerMove == Move.paper && computerMove == Move.rock)) {
    return 'Você venceu!';
  } else {
    return 'O computador venceu!';
  }
}