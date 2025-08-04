const digitValues = {
    "A_1": 1, "A_2": 2, "A_3": 3, "A_4": 4, "A_5": 5, "A_6": 6, "A_7": 7, "A_8": 8, "A_9": 9
};
const vowelValues = {
    "A_a": 1, "A_á": 3, "A_â": 8, "A_ã": 4, "A_à": 2, "A_ä": 2, "A_e": 5, "A_é": 7, "A_ê": 3,
    "A_è": 1, "A_ë": 1, "A_i": 1, "A_í": 3, "A_ì": 2, "A_î": 8, "A_ï": 2, "A_o": 7, "A_ó": 9,
    "A_ô": 5, "A_õ": 1, "A_ò": 5, "A_ö": 5, "A_u": 6, "A_ú": 8, "A_ü": 3, "A_ù": 3, "A_y": 1
};
const consonantValues = {
    "A_b": 2, "A_c": 3, "A_ç": 6, "A_d": 4, "A_f": 8, "A_g": 3, "A_h": 5, "A_j": 1, "A_k": 2,
    "A_l": 3, "A_m": 4, "A_n": 5, "A_ñ": 8, "A_p": 8, "A_q": 1, "A_r": 2, "A_s": 3, "A_t": 4,
    "A_v": 6, "A_x": 6, "A_w": 6, "A_z": 7
};
const digitReductionArray = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    [2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
    [3, 4, 5, 6, 7, 8, 9, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];
const interpretationData = [null, ["Força, poder, originalidade, iniciativa e liderança; pioneirismo, criatividade e ambição; autoconfiança, coragem, ousadia e controle; brilho, sucesso, conquistas e posses; independência, autoridade, determinação.", "Arrogância, agressividade, orgulho, autoritarismo, egoísmo, cinismo e solidão; preguiça, presunção e falta de iniciativa.", "Com a iniciativa e a determina&#231;&#227;o: a pessoa fica limitada, perdendo a coragem de se aventurar em algo novo. Pode, tamb&#233;m, ficar um longo per&#237;odo inativo, desempregado ou mesmo impotente para realizar o que quer que seja, permanecendo nesse estado o tempo que durar o Arcano que domina o per&#237;odo. Tal sequ&#234;ncia pode ainda provocar doen&#231;as card&#237;acas de v&#225;rios tipos."],
    ["Cooperação, participação, concessão; flexibilidade, sociabilidade, adaptação; facilidade de relacionamento, diplomacia, gentileza, cordialidade; atencioso e receptivo.", "Submissão, timidez, insegurança, indecisão; inibição, descuido, apatia; dependência, depressão.", " Com a autoconfian&#231;a: esta configura&#231;&#227;o provoca timidez e indecis&#227;o, podendo levar o seu possuidor a ser subjugado por aqueles mais pr&#243;ximos, sejam eles amigos, s&#243;cios, colegas de trabalho ou simplesmente conhecidos. Faz a pessoa perder a autoestima, limitando-a quanto a seus projetos e realiza&#231;&#245;es. Pode, ainda, causar doen&#231;as que provocam depend&#234;ncia qu&#237;mica."],
    ["Imaginação, criatividade, múltiplos talentos; sociabilidade, comunicação, valorização da beleza; fertilidade, multiplicação; divertido, otimista, benquisto; interessante, interessado.", "Desordenado, desastrado; exagero, extravagância; superficialidade, tagarelice; exibicionismo, excesso de vaidade; ciúme.", "Com a comunica&#231;&#227;o: a pessoa torna-se incompreendida, falta di&#225;logo sobre tudo e com todos, principalmente com colegas de trabalho e com o/a companheiro/a. Tem dificuldade de se impor em seus projetos e &#233; dif&#237;cil convencer as pessoas. Esta sequ&#234;ncia pode ainda causar doen&#231;as respirat&#243;rias ou de articula&#231;&#245;es."],
    ["Ordem, disciplina, organização, rigidez, equilíbrio; dedicação, sacrifício, trabalhador nato e obediente, resistente, incansável; honestidade, sinceridade, lealdade; estabilidade, persistência.", "Sistemático, visão limitada, tedioso; teimosia, inflexibilidade, sovinice; excesso de cautela, conservadorismo; inveja; medo do novo.", "Com o trabalho: torna dif&#237;cil qualquer realiza&#231;&#227;o profissional. Normalmente &#233; mal remunerado e as perspectivas profissionais s&#227;o dif&#237;ceis ou tem dificuldade em se manter no emprego ou se dar bem em qualquer atividade. Pode, ainda, causar doen&#231;as reum&#225;ticas e arteriais."],
    ["Liberdade, independência; versatilidade, facilidade de adaptação; desprendido, aventureiro, cigano; ousadia, coragem; sensualidade, sexualidade ativa; sociabilidade; esperteza.", "Irresponsabilidade; irreflexão, instabilidade; ansiedade, inquietação, temperamental; impulsividade; insatisfação; agitado, barulhento; abusos e vicios.", "Com a instabilidade financeira e pessoal: pode causar mudan&#231;as n&#227;o desejadas de casa, de emprego, meio social, de pa&#237;s e de parceiro. Sob esta influ&#234;ncia, a pessoa tem muitos altos e baixos, n&#227;o se fixando profissionalmente, sempre &#224; procura de melhores oportunidades, sem, contudo, as encontrar. Pode, tamb&#233;m, causar fuga do meio social em que habita e contrair doen&#231;as superficiais e destrutivas, ou seja, doen&#231;as de pele."],
    ["Tranquilidade, paz, calma; emotividade, afeição, amorosidade; caseiro, valoriza o lar; amizade, simpatia; conciliação, cooperação; bondade, solicitude; idealismo.", "Acomodação, desleixo, irresponsabilidade; paternalismo; controlador da vida alheia; apego excessivo aos familiares; excesso de preocupação; presunção, convencionalismo; ansiedade, ciúme.", "Com os afetos e sentimentos: causa decep&#231;&#245;es com amigos, s&#243;cios, colegas de trabalho, parentes e at&#233; com o c&#244;njuge (namorado ou companheiro), que n&#227;o o/a compreende em seus prop&#243;sitos e sentimentos. Em vista dessas decep&#231;&#245;es, a pessoa pode desenvolver algum tipo de doen&#231;a card&#237;aca."],
    ["Análise, introspecção, autocontrole; intelectualidade, cultura, racionalidade; perfeccionismo, exigência; sensibilidade, intuição; misticismo, superstição; seletividade, refinamento; honra, fidelidade.", "Arredio, confuso, vago; excesso de racionalidade; alto grau de exigência, mania de criticar; apreensão, nervosismo, vícios; sarcasmo; solidão; autodestruição.", "Com o medo e a intoler&#226;ncia: faz com que a pessoa se afaste de tudo e de todos; pode levar ao desmando, transformando as pessoas em seres dependentes, vaidosos, arrogantes e, consequentemente, v&#237;tima da pr&#243;pria intoler&#226;ncia. Provoca sentimentos de solid&#227;o, des&#226;nimo, doen&#231;as nervosas, dependentes e, em vista disso, possivelmente algum tipo de c&#226;ncer."],
    ["Direto, objetivo, verdadeiro; capacidade de organização, praticidade; retidão, autoridade; sucesso material, prestígio, ambição; talento para altos cargos; visionário.", "Injustiça, vingança, dominação; desonestidade, crueldade, uso das pessoas; autoritarismo, teimosia; egoísmo, ganância, excesso de apego ao material; mau uso da autoridade, sede de poder; frieza.", "Com problemas emocionais e tamb&#233;m financeiros: esta sequ&#234;ncia torna a pessoa arredia, afastando-a das atividades sociais. Caso n&#227;o seja evolu&#237;do espiritualmente, pode se descontrolar emocionalmente com muita facilidade. Sob esta vibra&#231;&#227;o, a pessoa pode oscilar entre a riqueza e a pobreza e, como consequ&#234;ncia, pode contrair graves doen&#231;as ou mesmo ter algum de seus dependentes com tais sintomas."],
    ["Humano, solícito, impessoal, compreensivo, generoso, prestativo, justo, capaz de amor incondicional; capacidade de realização, determinação; romantismo, sentimentalismo; magnetismo, Intuição; sentido artístico; ausência de preconceitos; visionário.", "Possessivo, acusador, rabugento, teimoso; vícios, autodestruição; mal humorado, temperamental; extravagância; bajulação; excessiva emotividade; indiscrição; melancolia e principalmente egoísmo.", "Com rela&#231;&#227;o a finan&#231;as: a pessoa passa por s&#233;rios problemas financeiros, tem perda de bens (m&#243;veis e im&#243;veis), as empresas fracassam e passa por v&#225;rios tipos de prova&#231;&#245;es provocados por longos per&#237;odos de paralisa&#231;&#227;o. Tudo isto pode afetar o sistema nervoso e o cora&#231;&#227;o."], null, ["Inspiração, intuição; sensibilidade desenvolvida; espiritualismo; sentido artístico, múltiplas habilidades.", "Apreensão, nervosismo, vícios; paranoia, mania de perseguição; negligência em relação ao material; instabilidade.", "é o primeiro número mestre, e é também conhecido como o número da fama."], null, null, null, null, null, null, null, null, null, null, ["Sabedoria nata, genialidade, facilidade de ensinar; força, vigor; espiritualismo, magia; futurista, sonhador.", "Ganância, corrupção; destruição acentuada; imprudência; uso da magia para o mal ou para si próprio.", "é o segundo número mestre e está relacionado a fama internacional e também empreendedorismo vitorioso."], null, null, null, null, null, null, null, null, null, null, ["Reúne as qualidades e defeitos dos dois primeiros, do número 11 e número 22. Inspiração, intuição; sensibilidade desenvolvida; espiritualismo; sentido artístico, múltiplas habilidades. Sabedoria nata, genialidade, facilidade de ensinar; força, vigor; espiritualismo, magia; futurista, sonhador.", "Reúne as qualidades e defeitos dos dois primeiros, do número 11 e número 22. Apreensão, nervosismo, vícios; paranoia, mania de perseguição; negligência em relação ao material; instabilidade. Ganância, corrupção; destruição acentuada; imprudência; uso da magia para o mal ou para si próprio.", "é o terceiro número mestre e é a somatória dos dois primeiros, e portanto é o maior e mais perfeito número mestre, sendo associado �  Cristo."],
];

function intReduction(count) {
    var sCount = count.toString();
    while ((sCount.length > 1) && (count != 11) && (count != 22) && (count != 33)) {
        count = 0;
        for (var j = 0; j < sCount.length; j++) count += parseInt(sCount[j]);
        sCount = count.toString();
    }
    return count;
}
var vowel_count = 0;
var consonant_count = 0;
var alphanum_count = 0;
var vowel_data = [];
var consonant_data = [];
var alphanum_data = [];
var vowel_value = [];
var consonant_value = [];
var alphanum_value = [];
var vowel_reduct = 0;
var consonant_reduct = 0;
var alphanum_reduct = 0;
var pyramid_value = [];
var pyramid_triads = [];
var triads_set = [];

function kabbalahNumerologyNameCalc(name) {
    vowel_data = [];
    vowel_value = [];
    vowel_count = 0;
    consonant_data = [];
    consonant_value = [];
    consonant_count = 0;
    alphanum_data = [];
    alphanum_value = [];
    alphanum_count = 0;
    name = name.toLowerCase();
    var pyramid_level = [];
    for (var i = 0; i < name.length; i++) {
        if (vowelValues["A_" + name[i]]) {
            vowel_data.push(name[i]);
            consonant_data.push(null);
            alphanum_data.push(name[i]);
            vowel_value.push(vowelValues["A_" + name[i]]);
            consonant_value.push(0);
            alphanum_value.push(vowelValues["A_" + name[i]]);
            vowel_count += vowelValues["A_" + name[i]];
        } else if (consonantValues["A_" + name[i]]) {
            vowel_data.push(null);
            consonant_data.push(name[i]);
            alphanum_data.push(name[i]);
            vowel_value.push(0);
            consonant_value.push(consonantValues["A_" + name[i]]);
            alphanum_value.push(consonantValues["A_" + name[i]]);
            consonant_count += consonantValues["A_" + name[i]];
        } else if (digitValues["A_" + name[i]]) {
            vowel_data.push(name[i]);
            consonant_data.push(null);
            alphanum_data.push(name[i]);
            vowel_value.push(digitValues["A_" + name[i]]);
            consonant_value.push(0);
            alphanum_value.push(digitValues["A_" + name[i]]);
            vowel_count += digitValues["A_" + name[i]];
        }
        alphanum_count = vowel_count + consonant_count;
        vowel_reduct = intReduction(vowel_count);
        consonant_reduct = intReduction(consonant_count);
        alphanum_reduct = intReduction(alphanum_count);
        pyramid_value = [];
        pyramid_value.push(alphanum_value);
    }
    while (pyramid_value[pyramid_value.length - 1].length > 1) {
        pyramid_level = new Array(pyramid_value[pyramid_value.length - 1].length - 1);
        for (var j = 0; j < pyramid_value[pyramid_value.length - 1].length - 1; j++) {
            pyramid_level[j] = digitReductionArray[pyramid_value[pyramid_value.length - 1][j]][pyramid_value[pyramid_value.length - 1][j + 1]]
        }
        pyramid_value.push(pyramid_level);
    }
    pyramid_triads = [];
    triads_set = [];
    for (var i = 0; i < pyramid_value.length - 2; i++) {
        for (var j = 2; j < pyramid_value[i].length; j++) {
            if ((pyramid_value[i][j]) == (pyramid_value[i][j - 1]) && (pyramid_value[i][j]) == (pyramid_value[i][j - 2])) {
                pyramid_triads.push([pyramid_value[i][j], i, j - 2]);
                if (triads_set.indexOf(pyramid_value[i][j]) == -1) triads_set.push(pyramid_value[i][j]);
                pyramid_value[i][j - 2] = "<span style=\"color: red; font-weight: bold;\">" + pyramid_value[i][j - 2] + "</span>";
pyramid_value[i][j - 1] = "<span style=\"color: red; font-weight: bold;\">" + pyramid_value[i][j - 1] + "</span>";
pyramid_value[i][j] = "<span style=\"color: red; font-weight: bold;\">" + pyramid_value[i][j] + "</span>";
            }
        }
    }
    return name;
}
const br = "<br />\n";
const hr = "<hr>\n";
const nbsp = "\&nbsp;";

function kabbalahNumerologyNameHandleFormat() {
    var pyramid_data = [];
    var tempArray;
    tempArray = [];
    pyramid_data.push(tempArray);
    tempArray = [];
    pyramid_data.push(tempArray);
    tempArray = [];
    for (var i = 0; i < alphanum_data.length; i++) {
    tempArray.push('<span style="font-weight: bold; color: rgb(2, 117, 216);">' + alphanum_data[i] + '</span>');
    tempArray.push(nbsp);
}

    tempArray.push(nbsp);
    tempArray.push(nbsp);
    pyramid_data.push(tempArray);
    tempArray = [];
    pyramid_data.push(tempArray);
    for (var i = 0; i < pyramid_value.length; i++) {
        tempArray = [];
        for (var j = 0; j < i; j++) {
            tempArray.push(nbsp);
        }
        for (var j = 0; j < pyramid_value[i].length; j++) {
            tempArray.push(pyramid_value[i][j]);
            tempArray.push(nbsp);
        }
        pyramid_data.push(tempArray);
    }
    var thePyramid = "<table>\n";
    for (var i = 0; i < pyramid_data.length; i++) {
        thePyramid += "<tr>\n";
        for (var j = 0; j < pyramid_data[i].length; j++) {
            thePyramid += "<td>\n";
            thePyramid += pyramid_data[i][j];
            thePyramid += "</td>\n";
        }
        thePyramid += "</tr>\n";
    }
    thePyramid += "</table>\n";
    return thePyramid;
}

function kabbalahNumerologyReportHandle(theName) {
    var theReport = "";
    theReport = "<p><b>Pirâmide Invertida do nome:</b> " + theName + "</p>\n";
    if (triads_set.length) {
        theReport += "<p><b>Sequências Negativas:</b>" + br;
        for (var i = 0; i < triads_set.length; i++) {
            let seq = triads_set[i].toString();
            // Pega o texto da interpretação
            let texto = interpretationData[seq][2];
            // Substitui \n ou \n\n por <br> para formatar no HTML
            texto = texto.replace(/\n/g, "<br>");
            theReport += "<font color=red>" + seq + seq + seq + "</font> - " + texto + br;
        }
        theReport += "</p>\n";
    }
    return theReport;
}


function kabbalahNumerologyNameHandle(theObject, thePyramidContainerId, theReportContainerId) {
    setTimeout(function() {
        kabbalahNumerologyNameCalc(theObject.value);
        document.getElementById(thePyramidContainerId).innerHTML = kabbalahNumerologyNameHandleFormat();
        document.getElementById(theReportContainerId).innerHTML = kabbalahNumerologyReportHandle(theObject.value);
    }, 50);
}

// ======= FUNÇÕES DIDÁTICAS E FINAL =========
function reduzirNumero(numero) {
    let n = Number(numero);
    while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
        n = n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
    }
    return n;
}

function explicacaoDiaNascimento(diaOriginal) {
    if (isNaN(diaOriginal) || diaOriginal < 1 || diaOriginal > 31) {
        return `<div>
            <p style="color: red"><b>Dia de nascimento inválido.</b></p>
        </div>`;
    }
    // Reduzir dia para 1 a 9, sempre
    let diaReduzido = reduzirDia(diaOriginal);
    let explicacao = "";
    switch(diaReduzido) {
        case 1: explicacao = "Líder, original, busca independência e realizações próprias."; break;
        case 2: explicacao = "Diplomático, sensível, cooperativo e preocupado com o outro."; break;
        case 3: explicacao = "Comunicativo, criativo, otimista, traz alegria e expressão."; break;
        case 4: explicacao = "Prático, dedicado, organizado, valoriza segurança e trabalho."; break;
        case 5: explicacao = "Versátil, aventureiro, busca liberdade e mudanças."; break;
        case 6: explicacao = "Responsável, acolhedor, cuida do lar e dos que ama."; break;
        case 7: explicacao = "Introspectivo, analítico, espiritualizado, busca conhecimento."; break;
        case 8: explicacao = "Ambicioso, prático, determinado, busca conquistas materiais."; break;
        case 9: explicacao = "Humanitário, generoso, inspira e acolhe o coletivo."; break;
        default: explicacao = "Dia inválido."; // nunca cai aqui pois reduzido sempre é 1 a 9
    }
    return `<div>
        <p><b>Dia de Nascimento:</b> ${diaOriginal}</p>
        <p>${explicacao}</p>
    </div>`;
}


function explicacaoExpressao(nome) {
    kabbalahNumerologyNameCalc(nome);
    let reduzido = alphanum_reduct;
    let explicacao = "";
    switch(reduzido) {
        case 1:
  explicacao = `<p>Você nasceu com a missão de liderar… mas tem vivido mais como um resolvedor solitário do que como alguém reconhecido. Isso te cansa por dentro, e ninguém vê.</p>
<p>Seu maior poder é a autonomia. Mas toda vez que você duvida de si, acaba dependendo de pessoas que te atrasam.</p>
<p>Você sente que precisa ir na frente, abrir caminho — mesmo quando ninguém entende o porquê. Isso não é teimosia, é o chamado da sua alma.</p>`;
  break;

case 2:
  explicacao = `<p>Você sente tudo antes dos outros, e por isso, muitas vezes, carrega dores que nem são suas.</p>
<p>Seu maior dom é a empatia. Mas quando ela está sem limites, vira autoabandono disfarçado de cuidado com o outro.</p>
<p>A vida te colocou no papel de pacificador, mas isso não significa que você tenha que silenciar suas próprias guerras internas.</p>`;
  break;

case 3:
  explicacao = `<p>Você veio ao mundo com o dom da expressão, mas talvez tenha aprendido cedo a calar ou se moldar pra ser aceito.</p>
<p>Seu brilho incomoda quem vive apagado. E às vezes, pra não desagradar, você se apaga também.</p>
<p>Existe uma alegria em você que cura os outros. Mas quando ninguém te escuta de verdade, essa alegria vira ansiedade disfarçada.</p>`;
  break;

case 4:
  explicacao = `<p>Você tem uma mente prática, que busca segurança e estrutura… mas essa mesma mente às vezes te prende em rotinas que já não fazem sentido.</p>
<p>A sua alma precisa de estabilidade. Mas o problema é quando você se acostuma a carregar o mundo sozinho e chama isso de força.</p>
<p>Você busca tanto fazer tudo certo que esquece de sentir se aquilo ainda faz sentido pra sua alma.</p>`;
  break;

case 5:
  explicacao = `<p>Você tem uma energia de liberdade que não suporta repetição, mas vive sendo testado por situações que te travam no mesmo lugar.</p>
<p>Sua alma quer movimento, mas sua realidade atual parece estar colocando correntes invisíveis nos seus pés.</p>
<p>Quando você não se movimenta, sua energia começa a se rebelar contra você mesma, virando ansiedade, impulsividade ou autossabotagem.</p>`;
  break;

case 6:
  explicacao = `<p>Você tem um coração que cuida, acolhe e se doa, mas por trás disso, muitas vezes, existe uma alma exausta e negligenciada.</p>
<p>Você sempre quer fazer o melhor por todos, mas no fundo sente que ninguém te cuida na mesma medida.</p>
<p>Seu maior bloqueio pode estar no excesso de responsabilidade que você mesmo assumiu e agora não consegue mais soltar.</p>`;
  break;

case 7:
  explicacao = `<p>Você nasceu com um radar espiritual e mental diferente… mas por isso também se sente deslocado, como se ninguém te entendesse.</p>
<p>Sua alma precisa de silêncio pra entender o mundo. Mas o mundo cobra respostas rápidas que você não quer dar.</p>
<p>Você tem profundidade, mas também desconfiança. E isso te protege, mas também te impede de se abrir para o novo.</p>`;
  break;

case 8:
  explicacao = `<p>Você nasceu pra prosperar e liderar, mas talvez ainda esteja preso em crenças que fazem você se sentir pequeno.</p>
<p>Seu número carrega força de comando, mas se você não reivindica seu valor, o mundo também não reconhece.</p>
<p>Quando você duvida do seu merecimento, sua energia trava, e você sente que dá mais do que recebe.</p>`;
  break;

case 9:
  explicacao = `<p>Você tem uma alma antiga, que veio pra curar, ensinar e libertar, mas às vezes esquece que você também precisa ser cuidado.</p>
<p>Sua compaixão é gigante. Mas se não tiver limites, ela se transforma em culpa e esgotamento.</p>
<p>Você sente tudo com profundidade, e muitas vezes se decepciona porque espera o mesmo nível de entrega dos outros.</p>`;
  break;

case 11:
  explicacao = `<p>Você tem uma sensibilidade fora do comum. Capta o que ninguém diz, sente o que ninguém vê,  mas vive engolindo tudo em silêncio.</p>
<p>Sua intuição é um farol… mas quando você não confia nela, se perde e começa a se culpar por tudo.</p>
<p>Você já tentou se encaixar em lugares que eram pequenos demais pra sua alma, e por isso viveu calado(a), cansado(a) e incompreendido(a).</p>
<p>Você sente que veio pra algo maior… mas a dúvida te trava mais do que o medo do fracasso.</p>`;
  break;

case 22:
  explicacao = `<p>Você carrega a força de construir coisas grandes — mas vive lutando contra o medo de não dar conta.</p>
<p>Você tem visão, estrutura, mente forte… mas vive travado(a) porque sente que ninguém entende o que se passa aí dentro.</p>
<p>O mundo te exige praticidade, mas sua alma grita por propósito.</p>
<p>Você sabe que nasceu pra algo grande, e por isso se cobra mais do que qualquer pessoa ao seu redor.</p>`;
  break;

        case 33: explicacao = "Expressão do amor incondicional, entrega e mestre de outros."; break;
        default: explicacao = "Expressão não identificada.";
    }
    return `<div>
        <p><b>Número de Expressão:</b> ${reduzido}</p>
        <p>${explicacao}</p>
    </div>`;
}

function explicacaoDestino(dataNascimento) {
    let digitos = dataNascimento.replace(/\D/g, '').split('').map(Number);
    let soma = digitos.reduce((a, b) => a + b, 0);
    let reduzido = reduzirNumero(soma);
    let explicacao = "";
    switch(reduzido) {
        case 1:
  explicacao = `<p>Nasceu para comandar, empreender, abrir caminhos.</p>
<p>Se destaca em posições de liderança, projetos autorais e decisões rápidas.</p>`;
  break;

case 2:
  explicacao = `<p>Veio para criar harmonia e unir pessoas.</p>
<p>Tem talento para lidar com o público, resolver conflitos e atuar em parcerias.</p>`;
  break;

case 3:
  explicacao = `<p>Expressivo, criativo e carismático.</p>
<p>Brilha em áreas ligadas à comunicação, arte, vendas e redes sociais.</p>`;
  break;

case 4:
  explicacao = `<p>Organizado, prático e comprometido.</p>
<p>Se dá bem em áreas técnicas, gestão, planejamento e tudo que exige estrutura e disciplina.</p>`;
  break;

case 5:
  explicacao = `<p>Ama liberdade, movimento e inovação.</p>
<p>Funciona melhor com flexibilidade, mudanças e ambientes dinâmicos.</p>`;
  break;

case 6:
  explicacao = `<p>Responsável, afetuoso e leal.</p>
<p>Brilha em profissões ligadas ao cuidado, ensino, estética ou tudo que envolve bem-estar.</p>`;
  break;

case 7:
  explicacao = `<p>Investigativo, profundo e reservado.</p>
<p>Tem afinidade com áreas intelectuais, científicas, terapêuticas ou espirituais.</p>`;
  break;

case 8:
  explicacao = `<p>Focado, ambicioso e estratégico.</p>
<p>Possui talento natural para negócios, liderança financeira e realização material.</p>`;
  break;

case 9:
  explicacao = `<p>Generoso, sensível e idealista.</p>
<p>Se realiza ajudando pessoas, ensinando, curando ou inspirando o coletivo.</p>`;
  break;

case 11:
  explicacao = `<p>Tem alma de mensageiro.</p>
<p>Inspira, ensina, desperta.</p>
<p>Funciona bem em áreas ligadas à espiritualidade, arte, cura e comunicação emocional.</p>`;
  break;

case 22:
  explicacao = `<p>Tem visão prática e espiritual ao mesmo tempo.</p>
<p>Foi feito para construir grandes projetos com propósito e impacto coletivo.</p>`;
  break;

        case 33: explicacao = "Destino de servir ao próximo, missão de amor e cura."; break;
        default: explicacao = "Destino não identificado.";
    }
    return `<div>
        <p><b>Número de Destino:</b> ${reduzido}</p>
        <p>${explicacao}</p>
    </div>`;
}

function explicacaoMissao(expressao, destino) {
    let soma = Number(expressao) + Number(destino);
    let reduzido = reduzirNumero(soma);
    let explicacao = "";
    switch(reduzido) {
        case 1:
  explicacao = `<p>Veio desenvolver iniciativa, coragem e independência.</p>
<p>A missão é confiar em si e assumir o próprio caminho sem medo de incomodar.</p>`;
  break;

case 2:
  explicacao = `<p>Precisa desenvolver empatia, escuta e equilíbrio emocional.</p>
<p>A alma veio aprender a se relacionar sem se anular.</p>`;
  break;

case 3:
  explicacao = `<p>Veio soltar a voz, brilhar, se comunicar.</p>
<p>A missão é vencer o medo do julgamento e transformar dor em arte, palavra ou humor.</p>`;
  break;

case 4:
  explicacao = `<p>Precisa desenvolver disciplina, paciência e base sólida.</p>
<p>A missão é deixar algo concreto no mundo, e aprender a respeitar os processos.</p>`;
  break;

case 5:
  explicacao = `<p>Veio quebrar padrões, mudar, evoluir.</p>
<p>A alma precisa aprender a se mover sem medo e viver com autenticidade.</p>`;
  break;

case 6:
  explicacao = `<p>Precisa encontrar equilíbrio entre se doar e se respeitar.</p>
<p>A missão é servir com amor, mas sem carregar tudo sozinha.</p>`;
  break;

case 7:
  explicacao = `<p>Veio mergulhar no autoconhecimento e confiar na intuição.</p>
<p>A missão é buscar sabedoria, e depois compartilhar.</p>`;
  break;

case 8:
  explicacao = `<p>A alma precisa aprender a lidar com dinheiro, poder e reconhecimento com maturidade.</p>
<p>A missão é crescer, mas com consciência.</p>`;
  break;

case 9:
  explicacao = `<p>Veio para fechar ciclos, curar e inspirar.</p>
<p>A missão é fazer o bem, mas sem se perder na dor dos outros.</p>`;
  break;

case 11:
  explicacao = `<p>Veio despertar consciências através da intuição, da sensibilidade e da palavra.</p>
<p>A missão é confiar no que sente e guiar com o coração.</p>`;
  break;

case 22:
  explicacao = `<p>A missão é pegar sonhos altos e transformar em algo concreto no mundo.</p>
<p>Veio pra deixar legado, mas precisa dominar o excesso de cobrança.</p>`;
  break;

        case 33: explicacao = "Missão de ser exemplo de amor, entrega e luz ao mundo."; break;
        default: explicacao = "Missão não identificada.";
    }
    return `<div>
        <p><b>Número de Missão:</b> ${reduzido}</p>
        <p>${explicacao}</p>
    </div>`;
}

// ==== DÍVIDAS CÁRMICAS COM EXPLICAÇÃO ====
function explicacaoDividasCarmicas(dia, expressao, destino) {
    let dividas = [];

    // Dívidas cármicas pelos dias literais
    let diaNum = Number(dia);
    if ([13, 14, 16, 19].includes(diaNum)) dividas.push(diaNum);

    // Dívidas pela Expressão
    if (expressao === 4) dividas.push(13);
    if (expressao === 5) dividas.push(14);
    if (expressao === 7) dividas.push(16);
    if (expressao === 1) dividas.push(19);

    // Dívidas pelo Destino
    if (destino === 4) dividas.push(13);
    if (destino === 5) dividas.push(14);
    if (destino === 7) dividas.push(16);
    if (destino === 1) dividas.push(19);

    // Elimina repetições
    dividas = [...new Set(dividas)];

    // Explicações didáticas
    const explicacoes = {
        13: "Ela causa em você atrasos, frustrações e um peso invisível que te obriga a lutar o tempo todo, até pelas coisas mais simples.\n\nEssa energia pode gerar ansiedade, exaustão e até quadros de tristeza profunda. Mesmo fazendo tudo certo, você sente que nunca é o suficiente.",
14: "Ela te prende em altos e baixos financeiros e emocionais.\n\nQuando tudo parece caminhar, algo vem e te derruba. Essa energia atrai desequilíbrios, impulsos, perdas e vícios silenciosos, inclusive em pessoas que drenam sua energia e seu dinheiro.",
16: "Ela atrai traições, decepções e perdas dolorosas.\n\nÉ como se sempre aparecesse alguém pra puxar seu tapete. Essa energia mexe com sua confiança, gera rupturas, separações e te faz viver com medo de confiar de novo.",
19: "Ela faz você caminhar sozinho(a), mesmo quando está cercado de pessoas.\n\nEssa energia abala sua vida financeira, trazendo ciclos de muito ganho… seguidos de perdas repentinas. Você se cobra por tudo, mas sente que ninguém te apoia de verdade.",

    };

    let html = "";
    if (dividas.length) {
        html += `<div><p><b>Dívidas Cármicas:</b> ${dividas.join(", ")}</p>`;
        dividas.forEach(num => {
            html += `<p style="margin-bottom:8px;"><b>${num}:</b> ${explicacoes[num]}</p>`;
        });
        html += `</div>`;
    } else {
        html += `<div>
            <p><b>Dívidas Cármicas:</b> Nenhuma</p>
            <p>Você não possui dívidas cármicas a destacar. Busque autoconhecimento através do seu mapa da vida para aproveitar ao máximo seus potenciais e superar seus desafios!</p>
        </div>`;
    }
    return html;
}


// ====== INÍCIO: FUNÇÃO DE EXIBIÇÃO NO NOVO LAYOUT ======
function mostrarResultados() {
    let nome = document.getElementById('input-field').value.trim();
    let dataNascimento = document.getElementById('birthdate').value.trim();

    if(!nome || !dataNascimento) {
        alert("Preencha o nome completo e a data de nascimento!");
        return;
    }
    let partesData = dataNascimento.split("/");
    let diaNasc = (partesData.length > 0) ? parseInt(partesData[0], 10) : NaN;

    // CALCULA TUDO
    kabbalahNumerologyNameCalc(nome);
    let htmlTriangulo = kabbalahNumerologyNameHandleFormat();
    let textoExplicacao = kabbalahNumerologyReportHandle(nome);
    let expressao = alphanum_reduct;
    let destino = (() => {
        let digitos = dataNascimento.replace(/\D/g, '').split('').map(Number);
        let soma = digitos.reduce((a, b) => a + b, 0);
        return reduzirNumero(soma);
    })();
    let missao = reduzirNumero(Number(expressao) + Number(destino));
    let dividas = listarDividas(diaNasc, expressao, destino);

    // ==== NOVO LAYOUT — exibe o bloco moderno ====
    document.getElementById('resultados').style.display = 'block';
    document.getElementById('triangulo-scroll-container').innerHTML = htmlTriangulo;
    document.getElementById('triangulo-texto').innerHTML = textoExplicacao;
    document.getElementById('nome-usuario').textContent = nome.toLowerCase();

    // CARDS (apenas número!)
    document.getElementById('numero-dia').textContent = reduzirDia(diaNasc);
    document.getElementById('numero-expressao').textContent = expressao;
    document.getElementById('numero-destino').textContent = destino;
    document.getElementById('numero-missao').textContent = missao;
    document.getElementById('numero-dividas').textContent = dividas;
}

// ====== DÍVIDAS SÓ O NÚMERO ======
function listarDividas(dia, expressao, destino) {
    let dividas = [];
    let diaNum = Number(dia);
    if ([13, 14, 16, 19].includes(diaNum)) dividas.push(diaNum);
    if (expressao === 4) dividas.push(13);
    if (expressao === 5) dividas.push(14);
    if (expressao === 7) dividas.push(16);
    if (expressao === 1) dividas.push(19);
    if (destino === 4) dividas.push(13);
    if (destino === 5) dividas.push(14);
    if (destino === 7) dividas.push(16);
    if (destino === 1) dividas.push(19);
    dividas = [...new Set(dividas)];
    return dividas.length ? dividas.join(", ") : 'Nenhuma';
}

// ======= ABRIR MODAL DE EXPLICAÇÃO =======
function abrirExplicacao(tipo) {
    let nome = document.getElementById('input-field').value.trim();
    let dataNascimento = document.getElementById('birthdate').value.trim();
    let partesData = dataNascimento.split("/");
    let diaNasc = (partesData.length > 0) ? parseInt(partesData[0], 10) : NaN;

    kabbalahNumerologyNameCalc(nome);
    let expressao = alphanum_reduct;
    let destino = (() => {
        let digitos = dataNascimento.replace(/\D/g, '').split('').map(Number);
        let soma = digitos.reduce((a, b) => a + b, 0);
        return reduzirNumero(soma);
    })();
    let missao = reduzirNumero(Number(expressao) + Number(destino));

    let explicacao = '';
    if(tipo === 'dia') explicacao = explicacaoDiaNascimento(diaNasc);
    if(tipo === 'expressao') explicacao = explicacaoExpressao(nome);
    if(tipo === 'destino') explicacao = explicacaoDestino(dataNascimento);
    if(tipo === 'missao') explicacao = explicacaoMissao(expressao, destino);
    if(tipo === 'dividas') explicacao = explicacaoDividasCarmicas(diaNasc, expressao, destino);

    document.getElementById('explicacao-conteudo').innerHTML = explicacao;
    document.getElementById('caixa-explicacao').style.display = 'flex';
}
function fecharExplicacao() {
    document.getElementById('caixa-explicacao').style.display = 'none';
}

// ======= REDUZIR DIA =======
function reduzirDia(dia) {
    let n = Number(dia);
    while (n > 9) {
        n = n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
    }
    return n;
}

// ======= MÁSCARA DATA DD/MM/AAAA =======
const inputDate = document.getElementById('birthdate');
inputDate.addEventListener('input', function(e) {
  let value = inputDate.value;
  value = value.replace(/\D/g, '');
  if (value.length > 8) value = value.slice(0, 8);
  if (value.length > 4) {
    value = value.replace(/^(\d{2})(\d{2})(\d{1,4}).*/, '$1/$2/$3');
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{1,2})/, '$1/$2');
  }
  inputDate.value = value;
});

