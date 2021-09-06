// https://sb.bitsnbites.eu/?data=U0JveAwC7d1NbxtFGMDxZ3Z2Q4QbSpGCGokIS1VVEAcqgUQPrYrkHLkhTgj1wq2hEkkQDn1blcVms1FleeM4hDQBilAFR45IgHrjK3DiG3DhHmbWa0NNvCPRbGLD_7c7b35mrNn15jTaSTwrMifVaXk3FPVLKMb0cyZ76Cs999PyH-nUS36gPE8Z2leePUSeyEVRo9FsRlEcN5u2liS2FscN-UQi-VjKNuuIn3fER80_SWz7zh3H8DJVZhwdnnfEJ8FeXu7m5b283Pl8-7Ot7mbngCGHatQ9nukdlfkR8aq8KPMyd_K4n5-ZyuypgvApM8f3C-IP63klyst-e_GAzuMoajXaUauZRq24E7WS7vpW0o07SXdtM-4000bbNf64Ld2SW0vmHC5XQglXZGnVNR4AAAAAAAAAUJL9D5TsXxMl_tSZ3ifeU0qdeyOwVaXt4Q1q_TLNOqZ5-nv-12fjbPxnWGz4fg-1J_3yAAAAAAAAAAAAjsF6L130n1wwtR8CUb83pboYPO2LKOVpT5uK2NLTIkHGjusvzWzkZTpUlsn1PtYZR9xK86luPNI-mlW_Uueflr9q9rjzL32CDq75Lzji_XudZ-lw2zH8sbnm77r_AAAAAAAAAADgn7yfQ5PWnxG5urxm2p8Gypt-59kLG8Fb01o81dubcfioy2Rj_qU67YhfcMQBAAAAAAAAAACOnJbbohdui_q1Ii-IqNd85dWWb_xYmzqnTDhbI9Om0v_PZsq3hx05_G7ZUb5rdhj6uxpO4vwnYY4uBc_Pf-HyAAAAAAAAAADAhNFvhyJXwhMiJ6TW-8jbPynVN_Ur2drYYLXM01kpEviBvyPytch9-XLwPbuyZ1p7WbltUrkC1xZ1teJwK1uZ6Uh38Imtb5nUzdbRkoKx42AnP7eld25J7-xm19U2PbqSXYytt23WsqfJ7oq5uNj1_S6BI64d8fvm8fnG5KPKsrkenzlH_IF8K9-ZvF_uZU_-rtwzx479aY6X6_Icfx0AAAAAAAAAAPxPtddF_RZqkUtyWUR_Hyh99iupbeqznqh-J_u-We-tM79wweQjWZW6fFjUZexce-_RdtSqLx7c8_BUHLErBfF5k64XxI-CYwvG068Wx2u9HSbrI3eavJ7no67zZp7fHBF3Kbr_VtH9t1w7ZLp-n387bwAAAAAAAAAAUB5vbcWk0Bd5-fzVG1oSX-nXv9DV1F8drI8NFs8GNdfbNA8ccQAAAAAAAAAAAGCc_Ak

import Worker from "./sound-box.worker.js";

var myWorker = new Worker();

let audio = null;

myWorker.onmessage = (e) => {
  let wave = e.data;
  audio = document.createElement("audio");
  audio.src = URL.createObjectURL(new Blob([wave], { type: "audio/wav" }));
  audio.volume = 0.7;
  audio.loop = true;
};

export default class Music {
  constuctor() {}

  startMusic() {
    let playPromise = audio.play();
    (function tryAgain(playPromise) {
      playPromise
        .then((_) => {})
        .catch((error) => {
          setTimeout(() => {
            let playPromise = audio.play();
            tryAgain(playPromise);
          }, 1000);
        });
    })(playPromise);
  }
}
