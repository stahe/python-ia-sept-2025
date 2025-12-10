# 4. Résolution des trois problèmes avec Google Gemini
Nous allons donner les copies d’écran des trois sessions Gemini qui ont permis de résoudre les trois problèmes posés. Nous irons assez dans les détails. Ceci fait, nous ne répéterons pas le processus pour les autres IA testées. Elles fonctionnent de manière analogue. Nous ne donnerons que les détails frappants.

## 4.1. Introduction
Nous rappelons la première copie d’écran de Gemini donnée précédemment :

<table>
<tr>
<td><img src="img/img_95.png" width="267"></td>
<td></td>
</tr>
</table>
- En [1], l’URL de Gemini ;
- En [2], la version de Gemini utilisée ;
- En [3-5], les trois problèmes posés à Gemini ;

Gemini est un produit de Google disponible à l’URL [https://gemini.google.com/]. Pour avoir un historique de vos sessions de questions / réponses comme ci-dessus, il vous faut créer un compte. Par ailleurs, comme toutes les autres IA testées, Gemini limite le nombre de vos questions et le nombre de fichiers téléchargés. Quand cette limite est atteinte, la session est terminée et on vous propose de la continuer plus tard dans le temps. Comme il est assez frustrant de s’arrêter en plein milieu d’une session, j’ai pris un abonnement. Le premier mois de l’abonnement Gemini est par chance gratuit. J’ai fait de même avec les autres IA qui avaient ces limites, à savoir ChatGPT, MistralAI, ClaudeAI. J’ai pris un abonnement d’un mois, mais là le premier mois était payant. Je n’ai pas rencontré de limites avec Grok. DeepSeek n’annonce pas de limites mais répond parfois [Server busy] et interrompt la session. Ca revient à mettre des limites sans le dire.

Dans la suite, je parlerai de session de questions / réponses, raccourcie à session simplement. Les IA utilisent le plus souvent le terme anglais chat (discussion) ou conversation.

L’interface de Gemini pour poser une question est la suivante :

<table>
<tr>
<td><img src="img/img_96.png" width="392"></td>
<td><img src="img/img_97.png" width="172"></td>
</tr>
</table>
- En [1], votre question ;
- En [2], l’icône qui lance l’IA pour le calcul de la réponse ;
- En [3-4], vous pouvez joindre des fichiers ;
## 4.2. Le problème 1
La session pour le problème 1 est la suivante :

<table>
<tr>
<td><img src="img/img_98.png" width="490"></td>
<td></td>
</tr>
</table>
- En [1], la question ;
- En [2], le début de la réponse de Gemini ;

La suite de la réponse est la suivante :

<table>
<tr>
<td><img src="img/img_99.png" width="442"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_100.png" width="459"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_101.png" width="432"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_102.png" width="453"></td>
<td></td>
</tr>
</table>
La réponse est correcte. Les cinq autres IA donneront également la bonne réponse sous une forme analogue.

## 4.3. Le problème 2
### 4.3.1. Introduction
On rappelle ici le problème initial du cours [[python3-flask-2020](https://tahe.developpez.com/tutoriels-cours/python-flask-2020/)]. C’est un texte donné en TD à des étudiants.

<table>
<tr>
<td><img src="img/img_103.png" width="497"></td>
<td></td>
</tr>
</table>
Le tableau ci-dessus permet de calculer l’impôt dans le cas simplifié d'un contribuable n'ayant que son seul salaire à déclarer. Comme l’indique la note (1), l’impôt ainsi calculé est l’impôt avant trois mécanismes :

- Le plafonnement du quotient familial qui intervient pour les hauts revenus ;
- La décote et la réduction d’impôts qui interviennent pour les faibles revenus ;

Ainsi le calcul de l’impôt comprend les étapes suivantes [http://impotsurlerevenu.org/comprendre-le-calcul-de-l-impot/1217-calcul-de-l-impot-2019.php] :

<table>
<tr>
<td><img src="img/img_104.png" width="496"></td>
<td></td>
</tr>
</table>
On se propose d'écrire un programme permettant de calculer l'impôt d'un contribuable en 2019 dans le cas simplifié d'un contribuable n'ayant que son seul salaire à déclarer.

#### 4.3.1.1. Calcul de l’impôt brut
L’impôt brut peut être calculé de la façon suivante :

On calcule d’abord le nombre de parts du contribuable :

- Chaque parent amène 1 part ;
- Les deux premiers enfants amènent chacun 1/2 part ;
- Les enfants suivants amènent une part chacun :

Le nombre de parts est donc :

- nbParts=1+nbEnfants*0,5+(nbEnfants-2)*0,5 si le salarié n’est pas marié ;
- nbParts=2+nbEnfants*0,5+(nbEnfants-2)*0,5 s'il est marié ;
- où nbEnfants est son nombre d'enfants ;
- On calcule le revenu imposable R=0.9*S où S est le salaire annuel ;
- On calcule le quotient familial QF=R/nbParts ;
- On calcule l’impôt brut I d'après les données suivantes (2019) :
<table>
<tr>
<td>9964</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>27519</td>
<td>0.14</td>
<td>1394.96</td>
</tr>
<tr>
<td>73779</td>
<td>0.3</td>
<td>5798</td>
</tr>
<tr>
<td>156244</td>
<td>0.4</td>
<td>13913.69</td>
</tr>
<tr>
<td>0</td>
<td>0.45</td>
<td>20163.45</td>
</tr>
</table>
Chaque ligne a 3 champs : champ1, champ2, champ3. Pour calculer l'impôt I, on recherche la première ligne où QF<=champ1 et on prend les valeurs de cette ligne. Par exemple, pour un salarié marié avec deux enfants et un salaire annuel S de 50000 euros :

Revenu imposable : R=0,9*S=45000

Nombre de parts : nbParts=2+2*0,5=3

Quotient familial : QF=45000/3=15000

La 1re ligne où QF<=champ1 est la suivante :

```python linenums="1"
	27519	0.14	1394.96
```

L'impôt I est alors égal à 0.14*R – 1394,96*nbParts=[0,14*45000-1394,96*3]=2115. L’impôt est arrondi à l’euro inférieur.

Si la relation QF<=champ1 dès la 1re ligne, alors l’impôt est nul.

Si QF est tel que la relation QF<=champ1 n'est jamais vérifiée, alors ce sont les coefficients de la dernière ligne qui sont utilisés. Ici :

```python linenums="1"
	0	0.45	20163.45
```

ce qui donne l'impôt brut I=0.45*R – 20163,45*nbParts.

#### 4.3.1.2. Plafonnement du quotient familial
<table>
<tr>
<td><img src="img/img_105.png" width="414"></td>
<td></td>
</tr>
</table>
Pour savoir si le plafonnement du quotient familial QF s’applique, on refait le calcul de l’impôt brut sans les enfants. Toujours pour le salarié marié avec deux enfants et un salaire annuel S de 50000 euros :

Revenu imposable : R=0,9*S=45000

Nombre de parts : nbParts=2 (on ne compte plus les enfants)

Quotient familial : QF=45000/2=22500

La 1re ligne où QF<=champ1 est la suivante :

```python linenums="1"
	27519	0.14	1394.96
```

L'impôt I est alors égal à 0.14*R – 1394,96*nbParts=[0,14*45000-1394,96*2]=3510.

Gain maximal lié aux enfants : 1551 * 2  = 3102 euros

Impôt minimal : 3510-3102 = 408 euros

L’impôt brut avec 2 parts déjà calculé au paragraphe précédent 2115 euros est supérieur à l’impôt minimal 408 euros, donc le plafonnement familial ne s’applique pas ici.

De façon générale, l’impôt brut est sup(impôt1, impôt2) où :

- [impôt1] : est l’impôt brut calculé avec les enfants ;
- [impôt2] : est l’impôt brut calculé sans les enfants et diminué du gain maximal (ici 1551 euros par demi-part) lié aux enfants ;
#### 4.3.1.3. Calcul de la décote
<table>
<tr>
<td><img src="img/img_106.png" width="523"></td>
<td></td>
</tr>
</table>
Toujours pour le salarié marié avec deux enfants et un salaire annuel S de 50000 euros :

L’impôt brut (2115 euros) issu de l’étape précédente est inférieur à 2627 euros pour un couple (1595 euros pour un célibataire) : la décote s’applique donc. Elle est obtenue avec le calcul suivant :

décote= seuil (couple=1970/célibataire=1196)-0,75* Impôt brut

décote=1970-0,75*2115=383,75 arrondi à 384 euros.

Nouvel Impôt brut= 2115-384= 1731 euros

Il faut observer deux règles dans le calcul de la décote (certains outils d’IA ont buté sur cette question) :

- La décote ne peut être négative ;
- La décote ne peut être supérieure à l’impôt déjà calculé ;
#### 4.3.1.4. Calcul de la réduction d’impôts
<table>
<tr>
<td><img src="img/img_107.png" width="522"></td>
<td></td>
</tr>
</table>
Au-dessous d’un certain seuil, une réduction de 20 % est faite sur l’impôt brut issu des calculs précédents. En 2019, les seuils sont les suivants :

- célibataire : 21037 euros ;
- couple : 42074 euros ; (le chiffre 37968 utilisé dans l’exemple ci-dessus semble erroné) ;

Ce seuil est augmenté de la valeur : 3797 * (nombre de demi-parts amenées par les enfants).

Toujours pour le salarié marié avec deux enfants et un salaire annuel S de 50000 euros :

- Son revenu imposable (45000 euros) est inférieur au seuil (42074+2*3797)=49668 euros ;
- Il a donc droit à une réduction de 20 % de son impôt : 1731 * 0,2= 346,2 euros arrondi à 347 euros ;
- L’impôt brut du contribuable devient : 1731-347= 1384 euros ;
#### 4.3.1.5. Calcul de l’impôt net
Notre calcul s’arrêtera là : l’impôt net à payer sera de 1384 euros. Dans la réalité, le contribuable peut bénéficier d’autres réductions notamment pour des dons à des organismes d’intérêt public ou général.

#### 4.3.1.6. Cas des hauts revenus
Notre exemple précédent correspond à la majorité des cas de salariés. Cependant le calcul de l’impôt est différent dans le cas des hauts revenus.

##### 4.3.1.6.1. Plafonnement de la réduction de 10 % sur les revenus annuels
Dans la plupart des cas, le revenu imposable est obtenu par la formule : R=0,9*S où S est le salaire annuel. On appelle cela la réduction des 10 %. Cette réduction est plafonnée. En 2019 :

- Elle ne peut être supérieure à 12502 euros ;
- Elle ne peut être inférieure à 437 euros ;

Prenons le cas d’un salarié non marié sans enfants et un salaire annuel de 200000 euros :

- La réduction de 10 % est de 20000 euros > 12502 euros. Elle est donc ramenée à 12502 euros ;

##### 4.3.1.6.2. Plafonnement du quotient familial
Prenons un cas où le plafonnement familial présenté au paragraphe |Plafonnement du quotient familial|, intervient. Prenons le cas d’un couple avec trois enfants et des revenus annuels de 100000 euros. Reprenons les étapes du calcul :

- L’abattement de 10 % est de 100000 euros < 12502 euros. Le revenu imposable R est donc 100000-10000=90000 euros ;
- Le couple a nbParts=2+0,5*2+1=4 parts ;
- Son quotient familial est donc QF= R/nbParts=90000/4=22500 euros ;
- Son impôt brut I1 avec enfants est I1=0,14*90000-1394,96*4= 7020 euros ;
- Son impôt brut I2 sans enfants :
- QF=90000/2=45000 euros ;
- I2=0,3*90000-5798*2=15404 euros ;
- La règle du plafonnement du quotient familial dit que le gain amené par les enfants ne peut dépasser (1551*4 demi-parts)=6204 euros. Or ici, il est I2-I1=15404-7020= 8384 euros, donc supérieur à 6204 euros ;
- L’impôt brut est donc recalculé comme I3=I2-6204=15404-6204= 9200 euros ;
- Comme I3>I1, ce sera l’impôt I3 qui sera conservé ;

Ce couple n’aura ni décote, ni réduction et son impôt final sera de 9200 euros.

#### 4.3.1.7. Chiffres officiels
Le calcul de l’impôt est complexe. Tout au long du document, les tests seront faits avec les exemples suivants. Les résultats sont ceux du simulateur de l’administration fiscale |[https://www3.impots.gouv.fr/simulateur/calcul_impot/2019/simplifie/index.htm](https://www3.impots.gouv.fr/simulateur/calcul_impot/2019/simplifie/index.htm)| :

<table>
<tr>
<td>Contribuable</td>
<td>Résultats officiels</td>
<td>Résultats de l’algorithme du document</td>
</tr>
<tr>
<td>Couple avec 2 enfants et des revenus annuels de 55555 euros</td>
<td>Impôt=2815 euros<br>Taux d’imposition=14 %</td>
<td>Impôt=2814 euros<br>Taux d’imposition=14 %</td>
</tr>
<tr>
<td>Couple avec 2 enfants et des revenus annuels de 50000 euros</td>
<td>Impôt=1385 euros<br>Décote=384 euros<br>Réduction=346 euros<br>Taux d’imposition=14 %</td>
<td>Impôt=1384 euros<br>Décote=384 euros<br>Réduction=347 euros<br>Taux d’imposition=14 %</td>
</tr>
<tr>
<td>Couple avec 3 enfants et des revenus annuels de 50000 euros</td>
<td>Impôt=0 euro<br>décote=720 euros<br>Réduction=0 euro<br>Taux d’imposition=14 %</td>
<td>Impôt=0 euro<br>décote=720 euros<br>Réduction=0 euro<br>Taux d’imposition=14 %</td>
</tr>
<tr>
<td>Célibataire avec 2 enfants et des revenus annuels de 100000 euros</td>
<td>Impôt=19884 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=41 %</td>
<td>Impôt=19884 euros<br>Surcote=4480 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=41 %</td>
</tr>
<tr>
<td>Célibataire avec 3 enfants et des revenus annuels de 100000 euros</td>
<td>Impôt=16782 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=41 %</td>
<td>Impôt=16782 euros<br>Surcote=7176 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=41 %</td>
</tr>
<tr>
<td>Couple avec 3 enfants et des revenus annuels de 100000 euros</td>
<td>Impôt=9200 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=30 %</td>
<td>Impôt=9200 euros<br>Surcote=2180 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=30 %</td>
</tr>
<tr>
<td>Couple avec 5 enfants et des revenus annuels de 100000 euros</td>
<td>Impôt=4230 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=14 %</td>
<td>Impôt=4230 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=14 %</td>
</tr>
<tr>
<td>Célibataire sans enfants et des revenus annuels de 100000 euros</td>
<td>Impôt=22986 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=41 %</td>
<td>Impôt= 22986 euros<br>Surcote=0 euro<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=41 %</td>
</tr>
<tr>
<td>Couple avec 2 enfants et des revenus annuels de 30000 euros</td>
<td>Impôt=0 euro<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=0 %</td>
<td>Impôt=0 euro<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=0 %</td>
</tr>
<tr>
<td>Célibataire sans enfants et des revenus annuels de 200000 euros</td>
<td>Impôt=64211 euro<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=45 %</td>
<td>Impôt= 64210 euros<br>Surcote=7498 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=45 %</td>
</tr>
<tr>
<td>Couple avec 3 enfants et des revenus annuels de 200000 euros</td>
<td>Impôt=42843 euro<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=41 %</td>
<td>Impôt=42842 euros<br>Surcote=17283 euros<br>décote=0 euro<br>Réduction=0 euro<br>Taux d’imposition=41 %</td>
</tr>
</table>
Ci-dessus, on appelle surcote, ce que paient en plus les hauts revenus à cause de deux phénomènes :

- Le plafonnement de l’abattement de 10 % sur les revenus annuels ;
- Le plafonnement du quotient familial ;

Cet indicateur n’a pu être vérifié car le simulateur de l’administration fiscale ne le donne pas.

On voit que l’algorithme du document donne un impôt juste à chaque fois, avec cependant une marge d’erreur de 1 euro. Cette marge d’erreur provient des arrondis. Toutes les sommes d’argent sont arrondies parfois à l’euro supérieur, parfois à l’euro inférieur. Comme je ne connaissais pas les règles officielles, les sommes d’argent de l’algorithme du document ont été arrondies :

- À l’euro supérieur pour les décotes et réductions ;
- À l’euro inférieur pour les surcotes et l’impôt final ;

Nous allons demander à l’IA de faire ce calcul d’impôt.

### 4.3.2. Configuration de la session Gemini
La question posée à Gemini s’accompagne de deux fichiers :

<table>
<tr>
<td><img src="img/img_108.png" width="277"></td>
<td></td>
</tr>
</table>
- En [1], le calcul qui vient d’être détaillé a été mis dans un PDF qui est donné à Gemini. Gemini va y trouver les règles exactes de calcul simplifié de l’impôt 2019 sur les revenus 2018 ;
- En [2], nos instructions ;
- En [3] pour lancer l’IA ;

Nos instructions dans le fichier texte [instructionsAvecPDF.txt] sont les suivantes :

```python linenums="1"
1 - Exprime-toi en français.
2 - Peux-tu générer un script Python permettant de calculer l'impôt payé par les familles en 2019 sur leurs revenus de 2018.
3 - Tu t'aideras du document PDF que j'ai joint et qui explique les calculs à faire.
4 - Tu dois faire attention aux points suivants :
- plafonnement du quotient familial. Il y a des seuils à vérifier.
- calcul de la décote dans certains cas. Il y a des seuils à vérifier.
- calcul de la réduction de 20% dans certains cas. Il y a des seuils à vérifier.
- plafonnement de l'abattement de 10% sur les revenus annuels dans certains cas.
- tu considèreras que tous les revenus sont à déclarer pour le déclarant 1 même si le couple est marié.
5 - Tu ajouteras au script généré des tests unitaires pour les cas suivants.
Dans ces tests on appelle :
adultes :nombre d'adultes du foyer fiscal
enfants : nombre d'enfants du foyer fiscal
revenus : revenus nets annuels avant impôt, ç-à-d avant le 1er calcul de l'abattement.
impot : l'impôt à payer
decote :la décote éventuelle du foyer fiscal
reduction : la réduction de 20% pour les faibles revenus
Voici les 11 tests à vérifier. Ils ont tous été vérifiés manuellement sur le simulateur officiel
du calcul de l'impôt 2019 [https://www3.impots.gouv.fr/simulateur/calcul_impot/2019/simplifie/index.html].
Si tu utilises ce simulateur les revenus doivent être associés au seul déclarant 1 dans le cas d'un couple, le déclarant 2 étant alors ignoré. Lorsqu'on répartit les revenus
sur deux déclarants, on n'obtient pas le même résultat.
On utilise la syntaxe (adultes, enfants, revenus) -> (impot, decote, reduction) pour dire que le script reçoit les entrées
(adultes, enfants, revenus) et produit les résultats (impot, decote, reduction)
test1 : (2,2,55555) -> (2815, 0, 0)
test2 : (2, 2, 50000) -> (1385, 384, 346)
test3 : (2,3,50000) -> (0, 720, 0)
test4: (1,2,100000) -> (19884, 0, 0)
test5: (1,3,100000) -> (16782, 0, 0)
test6 : (2, 3, 100000) -> (9200, 0, 0)
test7 : (2, 5, 100000) -> (4230, 0, 0)
test8 : (1, 0, 100000) -> (22986, 0, 0)
test9 : (2, 2, 30000) -> (0, 0, 0)
test10 : (1,0,200000) -> (64211, 0, 0)
test11  : (2, 3, 200000) -> (42843, 0, 0)
6 - Il peut y avoir des problèmes d'arrondis. Tu procèderas comme suit
- l'impôt à payer sera arrondi à l'euro inférieur,
- la décote sera arrondie à l'euro supérieur,
- la réduction de 20 % sera arrondie à l'euro supérieur.
- l'abattement de 10% sera arrondi à l'euro supérieur
Fais tous les tests unitaires à l'euro près à cause de ces éventuelles erreurs d'arrondi.
Ne cherche pas à avoir les valeurs exactes ci-dessus mais ces valeurs à 1 euro près.
7 - Evite de chercher sur internet. Le PDF que je te donne est correct.
Ne donne ton résultat que lorsque tu as passé les 11 tests unitaires avec succès.
8 - si l'un des tests échoue et que tu es bloqué, affiche ton raisonnement pour ce test
afin que je puisse t'aider.
9- Mets des commentaires détaillés dans le script que tu génères.
Mets le barème progressif dans une liste ou dictionnaire puis utilise cette liste ou dictionnaire
Mets les nombres en dur (nombres magiques) que tu utilises dans des constantes
Utilise des fonctions pour séparer les étapes du calcul.
Ecris le tout en français
9 - n'affiche pas le code généré à l'écran. Donne-moi simplement un lien pour le récupérer.
Si les tests unitaires échouent, je te donnerai les logs de l'exécution du script pour que
tu voies tes erreurs.
10 - si c'est possible, indique le temps en minutes et secondes que tu as mis pour produire
le script demandé.
```

Ces instructions sont le résultat de très nombreuses questions posées à Gemini. Assez rapidement, on se rend compte que l’IA doit être très cadrée si on veut obtenir ce qu’on veut. C’est à cause de tous ces tâtonnements que la session Gemini était finalement stoppée pour dépassement de limites. Examinons la suite de ces instructions :

- Ligne 1 : on demande que la conversation soit en français. Cette indication est pour DeepSeek qui avait tendance à parler anglais ;
- Ligne 3 : ce qu’on veut ;
- Ligne 5 : on dit à l’IA d’utiliser le PDF qu’on lui a donné ;
- Lignes 7-14 : un certain nombre de conseils utiles surtout pour le problème 3 sans PDF. Plusieurs IA se sont perdues dans le calcul de l’impôt ;
- Lignes 15-44 : les 11 tests unitaires que l’on veut voir inclus dans le script généré. Lorsque le script sera généré, on l’exécutera dans PyCharm et on verra bien si les 11 tests passent ;
- Lignes 46-53 : sans ces instructions, les IA généraient des tests unitaires cherchant des résultats exacts qui échouaient ;
- Lignes 55-56 : je dis à l’IA de ne pas aller sur internet. La solution la plus simple est d’utiliser le PDF ;
- Lignes 58-59 : cette instruction n’a pas été suivie par les IA. J’ai été obligé de l’écrire explicitement dans une question, lorsque je constatais qu’un test avait échoué ;
- Lignes 61-65 : j’indique quel type de script Python je souhaite ;
- Lignes 67-69 : j’aurais préféré un lien pour récupérer le script généré car l’affichage du code à l’écran prend du temps. Il s’est avéré que la plupart des IA ne savent pas faire cela. Les liens donnés ne marchaient pas ;
- Lignes 71-72 : j’aurais aimé avoir le temps passé par l’IA pour répondre à la question. Seule Gemini a pu me donner ce renseignement. Les autres IA soit ne répondaient pas à cette instruction, soit donnaient des chiffres fantaisistes montrant qu’elles ne comprenaient pas cette instruction ;
### 4.3.3. La réponse de Gemini
La première réponse de Gemini est la suivante :

<table>
<tr>
<td><img src="img/img_109.png" width="464"></td>
<td></td>
</tr>
</table>
- En [1-4], Gemini fournit des liens sur la partie du PDF ou du fichier texte des instructions qu’il utilise à un moment donné ;

La suite est la suivante :

<table>
<tr>
<td><img src="img/img_110.png" width="437"></td>
<td></td>
</tr>
</table>
- En [1], Gemini affirme qu’il a exécuté les 11 tests unitaires avec succès. La plupart des IA ont affirmé cela aussi bien sur le problème 2 que le problème 3 et souvent lorsqu’on chargeait le script généré ça ne marchait pas. Il faut donc se méfier de cette affirmation. Pour Gemini cela va s’avérer vrai ;
- En [2], un lien qui s’avérera ne pas marcher ;
- En [3 seule Gemini a donné un temps d’exécution réaliste ;

Donc le lien [2] ne marche pas. On le dit à Gemini :

<table>
<tr>
<td><img src="img/img_111.png" width="310"></td>
<td></td>
</tr>
</table>
La réponse de Gemini :

<table>
<tr>
<td><img src="img/img_112.png" width="459"></td>
<td></td>
</tr>
</table>
- En [1], le script Python généré par Gemini ;

On charge ce script dans PyCharm et on l’exécute :

<table>
<tr>
<td><img src="img/img_113.png" width="142"></td>
<td></td>
</tr>
</table>
- En [1], [gemini1] est le script généré par Gemini ;

A l’exécution du script apparaissent des erreurs de compilation :

```python linenums="1"
"C:\Program Files\Python313\python.exe" "C:/Program Files/JetBrains/PyCharm 2025.2.0.1/plugins/python-ce/helpers/pycharm/_jb_unittest_runner.py" --path "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\chatGPT\chatGPT1.py"
Testing started at 17:12 ...
Launching unittests with arguments python -m unittest C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\chatGPT\chatGPT1.py in C:\Data\st-2025\dev\python\code\python-flask-2025-cours
Traceback (most recent call last):
  File "C:\Program Files\JetBrains\PyCharm 2025.2.0.1\plugins\python-ce\helpers\pycharm\_jb_unittest_runner.py", line 38, in <module>
    sys.exit(main(argv=args, module=None, testRunner=unittestpy.TeamcityTestRunner,
             ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  buffer=not JB_DISABLE_BUFFERING))
                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Program Files\Python313\Lib\unittest\main.py", line 103, in __init__
    self.parseArgs(argv)
    ~~~~~~~~~~~~~~^^^^^^
  File "C:\Program Files\Python313\Lib\unittest\main.py", line 142, in parseArgs
    self.createTests()
    ~~~~~~~~~~~~~~~~^^
  File "C:\Program Files\Python313\Lib\unittest\main.py", line 153, in createTests
    self.test = self.testLoader.loadTestsFromNames(self.testNames,
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
                                                   self.module)
                                                   ^^^^^^^^^^^^
  File "C:\Program Files\Python313\Lib\unittest\loader.py", line 207, in loadTestsFromNames
    suites = [self.loadTestsFromName(name, module) for name in names]
              ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "C:\Program Files\Python313\Lib\unittest\loader.py", line 137, in loadTestsFromName
    module = __import__(module_name)
  File "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\chatGPT\chatGPT1.py", line 28, in <module>
    [cite_start]
     ^^^^^^^^^^
NameError: name 'cite_start' is not defined
Process finished with exit code 1
Empty suite
```

- Ligne 30, l’erreur de compilation. [cite_start] est un marqueur pour générer une certaine forme de texte ;

On met les logs ci-dessus dans un fichier [logs gemini1.txt] et on donne celui-ci à Gemini :

<table>
<tr>
<td><img src="img/img_114.png" width="274"></td>
<td></td>
</tr>
</table>
La réponse de Gemini est alors la suivante :

<table>
<tr>
<td><img src="img/img_115.png" width="447"></td>
<td></td>
</tr>
</table>
Chargé dans PyCharm, l’exécution du nouveau script génère exactement la même erreur. On le dit à Gemini en lui fournissant de nouveau les logs de l’exécution :

<table>
<tr>
<td><img src="img/img_116.png" width="221"></td>
<td></td>
</tr>
</table>
La réponse de Gemini est la suivante :

<table>
<tr>
<td><img src="img/img_117.png" width="465"></td>
<td></td>
</tr>
</table>
Cette fois c’est bon. Les 11 tests unitaires sont réussis. On le dit à Gemini :

<table>
<tr>
<td><img src="img/img_118.png" width="124"></td>
<td></td>
</tr>
</table>
Qui répond :

<table>
<tr>
<td><img src="img/img_119.png" width="447"></td>
<td></td>
</tr>
</table>
Le script généré par Gemini a suivi les instructions données dans le fichier texte [instructionsAvecPDF.txt] :

```python linenums="1"
# -*- coding: utf-8 -*-
"""
Script pour le calcul de l'impôt 2019 sur les revenus de 2018 en France,
basé sur les règles simplifiées fournies dans le document PDF.
"""
import math
import unittest
# --- CONSTANTES DE CALCUL POUR L'IMPÔT 2019 ---
# Toutes les valeurs sont extraites du document PDF fourni.
# Plafonds pour l'abattement de 10% sur les revenus annuels
PLAFOND_ABATTEMENT_10_POURCENT = 12502.0
MINIMUM_ABATTEMENT_10_POURCENT = 437.0
# Barème de l'impôt sur le revenu 2019
# Structure: (Seuil maximum de la tranche, Taux d'imposition, Montant à déduire par part)
BAREME_IMPOT_2019 = [
    {"seuil": 9964, "taux": 0.0, "deduction_par_part": 0},
    {"seuil": 27519, "taux": 0.14, "deduction_par_part": 1394.96},
    {"seuil": 73779, "taux": 0.30, "deduction_par_part": 5798},
    {"seuil": 156244, "taux": 0.41, "deduction_par_part": 13913.69},
    {"seuil": float('inf'), "taux": 0.45, "deduction_par_part": 20163.45}
]
# Plafonnement du quotient familial
GAIN_MAX_DEMI_PART = 1551.0  # Gain maximal par demi-part supplémentaire
# Seuils et montants pour la décote
SEUIL_APPLICATION_DECOTE = {"celibataire": 1595.0, "couple": 2627.0}
SEUIL_CALCUL_DECOTE = {"celibataire": 1196.0, "couple": 1970.0}
# Seuils pour la réduction d'impôt de 20%
SEUIL_BASE_REDUCTION_20 = {"celibataire": 21037.0, "couple": 42074.0}
MAJORATION_SEUIL_REDUCTION_PAR_DEMI_PART = 3797.0
def calculer_nombre_parts(adultes: int, enfants: int) -> float:
    """
    Calcule le nombre de parts fiscales du foyer.
    - Chaque parent amène 1 part.
    - Les deux premiers enfants amènent chacun 1/2 part.
    - Les enfants suivants amènent une part chacun.
    """
    if adultes not in [1, 2]:
        raise ValueError("Le nombre d'adultes doit être 1 ou 2.")
    parts = float(adultes)
    if enfants > 0:
        parts += 0.5 * min(enfants, 2)
    if enfants > 2:
        parts += 1.0 * (enfants - 2)
    return parts
def calculer_revenu_imposable(revenus: float) -> float:
    """
    Calcule le revenu net imposable après l'abattement de 10%.
    Cet abattement est plafonné.
    L'abattement est arrondi à l'euro supérieur.
    """
    abattement_calcule = revenus * 0.1
    # L'abattement est plafonné entre un minimum et un maximum
    abattement = min(PLAFOND_ABATTEMENT_10_POURCENT, max(MINIMUM_ABATTEMENT_10_POURCENT, abattement_calcule))
    # L'énoncé demande d'arrondir l'abattement à l'euro supérieur
    abattement_arrondi = math.ceil(abattement)
    return revenus - abattement_arrondi
def calculer_impot_brut_base(revenu_imposable: float, nombre_parts: float) -> float:
    """
    Calcule l'impôt brut selon le barème progressif.
    """
    if nombre_parts <= 0:
        return 0.0
    quotient_familial = revenu_imposable / nombre_parts
    tranche_applicable = None
    for tranche in BAREME_IMPOT_2019:
        if quotient_familial <= tranche["seuil"]:
            tranche_applicable = tranche
            break
    # Si le QF est supérieur à tous les seuils, on utilise la dernière tranche
    if tranche_applicable is None:
        tranche_applicable = BAREME_IMPOT_2019[-1]
    # Formule de calcul de l'impôt brut
    impot_brut = (revenu_imposable * tranche_applicable["taux"]) - (
            tranche_applicable["deduction_par_part"] * nombre_parts)
    return max(0.0, impot_brut)
def appliquer_plafonnement_qf(impot_brut_avec_enfants: float, revenu_imposable: float, adultes: int,
                              enfants: int) -> float:
    """
    Applique le plafonnement du quotient familial si nécessaire.
    L'impôt final ne peut être inférieur à l'impôt calculé sans les enfants,
    diminué d'un gain maximal par demi-part.
    """
    if enfants == 0:
        return impot_brut_avec_enfants
    # Calcul de l'impôt sans les parts des enfants
    parts_sans_enfants = calculer_nombre_parts(adultes, 0)
    impot_sans_enfants = calculer_impot_brut_base(revenu_imposable, parts_sans_enfants)
    # Calcul du gain maximal lié aux enfants
    parts_avec_enfants = calculer_nombre_parts(adultes, enfants)
    demi_parts_enfants = (parts_avec_enfants - parts_sans_enfants) * 2
    gain_maximal = demi_parts_enfants * GAIN_MAX_DEMI_PART
    impot_minimal_plafone = impot_sans_enfants - gain_maximal
    # L'impôt retenu est le plus élevé des deux calculs
    return max(impot_brut_avec_enfants, impot_minimal_plafone)
def appliquer_decote(impot_avant_decote: float, adultes: int) -> tuple[float, float]:
    """
    Applique la décote si l'impôt est inférieur à certains seuils.
    La décote est arrondie à l'euro supérieur.
    """
    statut = "couple" if adultes == 2 else "celibataire"
    seuil_application = SEUIL_APPLICATION_DECOTE[statut]
    seuil_calcul = SEUIL_CALCUL_DECOTE[statut]
    decote = 0.0
    # La décote s'applique si l'impôt est sous le seuil d'application
    if impot_avant_decote < seuil_application:
        # Formule de la décote : seuil - 0.75 * Impôt brut
        decote_calculee = seuil_calcul - (0.75 * impot_avant_decote)
        # Arrondi à l'euro supérieur
        decote = math.ceil(decote_calculee)
        # La décote ne peut être négative ni supérieure à l'impôt
        decote = max(0.0, min(decote, impot_avant_decote))
    impot_apres_decote = impot_avant_decote - decote
    return impot_apres_decote, decote
def appliquer_reduction_20_pourcent(impot_avant_reduction: float, revenu_imposable: float, adultes: int,
                                    enfants: int) -> tuple[float, float]:
    """
    Applique la réduction de 20% sous condition de revenus.
    La réduction est arrondie à l'euro supérieur.
    """
    statut = "couple" if adultes == 2 else "celibataire"
    seuil_base = SEUIL_BASE_REDUCTION_20[statut]
    # Le seuil est augmenté pour chaque demi-part liée aux enfants
    parts_avec_enfants = calculer_nombre_parts(adultes, enfants)
    parts_adultes = calculer_nombre_parts(adultes, 0)
    demi_parts_enfants = (parts_avec_enfants - parts_adultes) * 2
    seuil_final = seuil_base + (demi_parts_enfants * MAJORATION_SEUIL_REDUCTION_PAR_DEMI_PART)
    reduction = 0.0
    # La réduction s'applique si le revenu imposable est sous le seuil
    if revenu_imposable < seuil_final:
        reduction_calculee = impot_avant_reduction * 0.20
        # Arrondi à l'euro supérieur
        reduction = math.ceil(reduction_calculee)
    impot_apres_reduction = impot_avant_reduction - reduction
    return max(0.0, impot_apres_reduction), reduction
def calculer_impot(adultes: int, revenus: float, enfants: int) -> dict:
    """
    Orchestre le calcul complet de l'impôt net à payer.
    """
    # Étape 1: Calcul du revenu imposable
    revenu_imposable = calculer_revenu_imposable(revenus)
    # Étape 2: Calcul du nombre de parts
    nombre_parts = calculer_nombre_parts(adultes, enfants)
    # Étape 3: Calcul de l'impôt brut
    impot_brut_initial = calculer_impot_brut_base(revenu_imposable, nombre_parts)
    # Étape 4: Application du plafonnement du QF
    impot_apres_plafonnement = appliquer_plafonnement_qf(impot_brut_initial, revenu_imposable, adultes, enfants)
    # Étape 5: Application de la décote
    impot_apres_decote, decote_calculee = appliquer_decote(impot_apres_plafonnement, adultes)
    # Étape 6: Application de la réduction de 20%
    impot_avant_arrondi_final, reduction_calculee = appliquer_reduction_20_pourcent(impot_apres_decote,
                                                                                    revenu_imposable, adultes, enfants)
    # Étape 7: Arrondi final de l'impôt à l'euro inférieur
    impot_final = math.floor(impot_avant_arrondi_final)
    return {
        "impot": impot_final,
        "decote": decote_calculee,
        "reduction": reduction_calculee
    }
# --- TESTS UNITAIRES ---
# Validation du script avec les cas fournis
class TestCalculImpot2019(unittest.TestCase):
    def _verifier_resultat(self, adultes, enfants, revenus, impot_attendu, decote_attendue, reduction_attendue):
        """Fonction utilitaire pour exécuter un test et vérifier les résultats à 1 euro près."""
        resultat = calculer_impot(adultes=adultes, revenus=revenus, enfants=enfants)
        self.assertAlmostEqual(resultat["impot"], impot_attendu, delta=1,
                               msg=f"Test ({adultes}, {enfants}, {revenus}): Impôt attendu {impot_attendu}, obtenu {resultat['impot']}")
        self.assertAlmostEqual(resultat["decote"], decote_attendue, delta=1,
                               msg=f"Test ({adultes}, {enfants}, {revenus}): Décote attendue {decote_attendue}, obtenue {resultat['decote']}")
        self.assertAlmostEqual(resultat["reduction"], reduction_attendue, delta=1,
                               msg=f"Test ({adultes}, {enfants}, {revenus}): Réduction attendue {reduction_attendue}, obtenue {resultat['reduction']}")
    def test_cas_1(self):
        # (2, 2, 55555) -> (2815, 0, 0)
        self._verifier_resultat(2, 2, 55555, 2815, 0, 0)
    def test_cas_2(self):
        # (2, 2, 50000) -> (1385, 384, 346)
        self._verifier_resultat(2, 2, 50000, 1385, 384, 346)
    def test_cas_3(self):
        # (2, 3, 50000) -> (0, 720, 0)
        self._verifier_resultat(2, 3, 50000, 0, 720, 0)
    def test_cas_4(self):
        # (1, 2, 100000) -> (19884, 0, 0)
        self._verifier_resultat(1, 2, 100000, 19884, 0, 0)
    def test_cas_5(self):
        # (1, 3, 100000) -> (16782, 0, 0)
        self._verifier_resultat(1, 3, 100000, 16782, 0, 0)
    def test_cas_6(self):
        # (2, 3, 100000) -> (9200, 0, 0)
        self._verifier_resultat(2, 3, 100000, 9200, 0, 0)
    def test_cas_7(self):
        # (2, 5, 100000) -> (4230, 0, 0)
        self._verifier_resultat(2, 5, 100000, 4230, 0, 0)
    def test_cas_8(self):
        # (1, 0, 100000) -> (22986, 0, 0)
        self._verifier_resultat(1, 0, 100000, 22986, 0, 0)
    def test_cas_9(self):
        # (2, 2, 30000) -> (0, 0, 0)
        self._verifier_resultat(2, 2, 30000, 0, 0, 0)
    def test_cas_10(self):
        # (1, 0, 200000) -> (64211, 0, 0)
        self._verifier_resultat(1, 0, 200000, 64211, 0, 0)
    def test_cas_11(self):
        # (2, 3, 200000) -> (42843, 0, 0)
        self._verifier_resultat(2, 3, 200000, 42843, 0, 0)
if __name__ == '__main__':
    print("Exécution des tests unitaires...")
    unittest.main(argv=['first-arg-is-ignored'], exit=False)
    # Exemple d'utilisation du calculateur pour un cas précis
    print("\n--- Exemple de calcul ---")
    revenus_annuels = 50000
    nombre_adultes = 2
    nombre_enfants = 2
    resultat_calcul = calculer_impot(adultes=nombre_adultes, revenus=revenus_annuels, enfants=nombre_enfants)
    print(f"Pour un couple ({nombre_adultes} adultes) avec {nombre_enfants} enfants et {revenus_annuels}€ de revenus :")
    print(f"  - Impôt à payer : {resultat_calcul['impot']}€")
    print(f"  - Montant de la décote : {resultat_calcul['decote']}€")
    print(f"  - Montant de la réduction : {resultat_calcul['reduction']}€")
```

Je n’ai pas vérifié ce code. Puisque les 11 tests unitaires sont passés, je considère qu’il est « probablement correct ». Je n’ai pas fait davantage pour mon propre code que de vérifier ces 11 tests.

## 4.4. Le problème 3
Le problème 3 est identique au problème 2, si ce n’est qu’on ne donne plus à l’IA le PDF qui donnait les règles de calcul à observer.

La question initiale à Gemini est la suivante :

<table>
<tr>
<td><img src="img/img_120.png" width="138"></td>
<td></td>
</tr>
</table>
Le fichier des instructions en [1] est quasiment le même que pour le problème 2 avec les différences suivantes :

```python linenums="1"
1 - Exprime-toi en français.
2 - Peux-tu générer un script Python permettant de calculer l'impôt payé par les familles en 2019 sur leurs revenus de 2018.
3 - Tu t'aideras des sources que tu trouveras sur internet. Dans ta réponse indique-moi ces sources.
4 - Tu dois faire attention aux points suivants :
…
```

- En [3], on lui dit de trouver sur internet les règles de calcul de l’impôt 2019 sur les revenus 2018. C’est un exercice plus difficile que le précédent ;

Je ne donne ci-dessous que des parties de la première réponse de Gemini :

<table>
<tr>
<td><img src="img/img_121.png" width="442"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_122.png" width="437"></td>
<td></td>
</tr>
</table>
Le temps estimé est plausible. On attend longtemps la réponse de Gemini.

Comme précédemment, Gemini a fourni un lien de téléchargement du script généré, lien qui ne marche pas. On le lui dit :

<table>
<tr>
<td><img src="img/img_123.png" width="305"></td>
<td></td>
</tr>
</table>
La réponse de Gemini :

<table>
<tr>
<td><img src="img/img_124.png" width="453"></td>
<td></td>
</tr>
</table>
On charge le script dans PyCharm sous le nom [gemini2]:

<table>
<tr>
<td><img src="img/img_125.png" width="176"></td>
<td></td>
</tr>
</table>
On l’exécute et… ça ne marche pas. Les logs de l’exécution sont les suivants :

```python linenums="1"
"C:\Program Files\Python313\python.exe" "C:/Program Files/JetBrains/PyCharm 2025.2.0.1/plugins/python-ce/helpers/pycharm/_jb_unittest_runner.py" --path "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py"
Testing started at 17:23 ...
Launching unittests with arguments python -m unittest C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py in C:\Data\st-2025\dev\python\code\python-flask-2025-cours
Failure
Traceback (most recent call last):
  File "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py", line 278, in test_cas_2
    self.assertAlmostEqual(impot, 1385, delta=1)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 1691 != 1385 within 1 delta (306 difference)
Error
Traceback (most recent call last):
  File "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py", line 291, in test_cas_3
    impot, _, _ = calculer_impot_final(2, 3, 50000)
                  ~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py", line 187, in calculer_impot_final
    decote, impot_apres_decote = calculer_decote(impot_apres_plafonnement, adultes)
                                 ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py", line 134, in calculer_decote
    decote = seuil_decote - (impot_avant_decote * COFFICIENT_DECOTE)
                                                  ^^^^^^^^^^^^^^^^^
NameError: name 'COFFICIENT_DECOTE' is not defined. Did you mean: 'COEFFICIENT_DECOTE'?
Error
Traceback (most recent call last):
  File "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py", line 316, in test_cas_9
    self._verifier_cas(2, 2, 30000, (0, 0, 0))
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py", line 216, in _verifier_cas
    impot_calcule, decote_calculee, reduction_calculee = calculer_impot_final(adultes, enfants, revenus)
                                                         ~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py", line 187, in calculer_impot_final
    decote, impot_apres_decote = calculer_decote(impot_apres_plafonnement, adultes)
                                 ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Data\st-2025\dev\python\code\python-flask-2025-cours\outils ia\gemini\gemini2.py", line 134, in calculer_decote
    decote = seuil_decote - (impot_avant_decote * COFFICIENT_DECOTE)
                                                  ^^^^^^^^^^^^^^^^^
NameError: name 'COFFICIENT_DECOTE' is not defined. Did you mean: 'COEFFICIENT_DECOTE'?
Ran 11 tests in 0.038s
FAILED (failures=1, errors=2)
Process finished with exit code 1
```

- Ligne 11, un test a échoué ;
- Lignes 25, 42 : une même erreur de compilation ;

On met ces logs dans un fichier texte qu’on donne à Gemini :

<table>
<tr>
<td><img src="img/img_126.png" width="263"></td>
<td></td>
</tr>
</table>
La réponse de Gemini :

<table>
<tr>
<td><img src="img/img_127.png" width="448"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_128.png" width="453"></td>
<td></td>
</tr>
</table>
On charge dans PyCharm le script et on l’exécute. Encore des erreurs. On le dit à Gemini en joignant de nouveau les logs de l’exécution :

<table>
<tr>
<td><img src="img/img_129.png" width="231"></td>
<td></td>
</tr>
</table>
La réponse de Gemini :

<table>
<tr>
<td><img src="img/img_130.png" width="436"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_131.png" width="436"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_132.png" width="459"></td>
<td></td>
</tr>
</table>
On charge ce nouveau script dans PyCharm et on l’exécute. Cette fois les 11 tests unitaires passent :

Le code généré par Gemini est le suivant :

```python linenums="1"
# -*- coding: utf-8 -*-
import math
import unittest
# ==============================================================================
# CONSTANTES POUR L'IMPOSITION DES REVENUS 2018 (PAYÉE EN 2019)
# ==============================================================================
BAREME_IMPOT_2019 = [
    {'seuil': 0, 'taux': 0.0},
    {'seuil': 9964, 'taux': 0.14},
    {'seuil': 27519, 'taux': 0.30},
    {'seuil': 73779, 'taux': 0.41},
    {'seuil': 156244, 'taux': 0.45},
]
ABATTEMENT_FORFAITAIRE_TAUX = 0.10
ABATTEMENT_FORFAITAIRE_MINIMUM = 437
ABATTEMENT_FORFAITAIRE_PLAFOND = 12502
PLAFONNEMENT_AVANTAGE_QF_DEMI_PART = 1551
SEUIL_DECOTE_CELIBATAIRE = 1196
SEUIL_DECOTE_COUPLE = 1970
COEFFICIENT_DECOTE = 0.75
TAUX_REDUCTION_20_POURCENT = 0.20
SEUIL_RFR_REDUCTION_CELIBATAIRE = 18985
SEUIL_RFR_REDUCTION_COUPLE = 37970
MAJORATION_RFR_REDUCTION_PAR_DEMI_PART = 3803
# ==============================================================================
# FONCTIONS DE CALCUL
# ==============================================================================
def calculer_nombre_parts(adultes: int, enfants: int) -> float:
    """Calcule le nombre de parts du foyer fiscal."""
    if adultes < 1: return 0
    parts = float(adultes)
    if enfants >= 1: parts += 0.5
    if enfants >= 2: parts += 0.5
    if enfants >= 3: parts += (enfants - 2) * 1.0
    return parts
def calculer_revenu_imposable(revenus_bruts: float) -> float:
    """Calcule le revenu net imposable après abattement de 10%."""
    if revenus_bruts == 0: return 0.0
    abattement = revenus_bruts * ABATTEMENT_FORFAITAIRE_TAUX
    if abattement < ABATTEMENT_FORFAITAIRE_MINIMUM: abattement = ABATTEMENT_FORFAITAIRE_MINIMUM
    if abattement > ABATTEMENT_FORFAITAIRE_PLAFOND: abattement = ABATTEMENT_FORFAITAIRE_PLAFOND
    abattement = math.ceil(abattement)
    revenu_imposable = revenus_bruts - abattement
    return revenu_imposable if revenu_imposable > 0 else 0
def calculer_impot_brut_par_tranche(revenu_imposable: float, nombre_parts: float) -> float:
    """Calcule l'impôt brut en appliquant le barème progressif."""
    if nombre_parts <= 0 or revenu_imposable <= 0: return 0.0
    quotient_familial = revenu_imposable / nombre_parts
    impot_par_part = 0.0
    for i in range(len(BAREME_IMPOT_2019)):
        tranche = BAREME_IMPOT_2019[i]
        seuil_actuel = tranche['seuil']
        taux = tranche['taux']
        if quotient_familial > seuil_actuel:
            base_imposable_tranche = 0
            if i < len(BAREME_IMPOT_2019) - 1:
                seuil_suivant = BAREME_IMPOT_2019[i + 1]['seuil']
                base_imposable_tranche = min(quotient_familial, seuil_suivant) - seuil_actuel
            else:
                base_imposable_tranche = quotient_familial - seuil_actuel
            impot_par_part += base_imposable_tranche * taux
    return impot_par_part * nombre_parts
def appliquer_plafonnement_qf(revenu_imposable: float, nombre_parts: float, adultes: int,
                              impot_brut_famille: float) -> float:
    """Applique le plafonnement des effets du quotient familial."""
    if nombre_parts <= adultes: return impot_brut_famille
    impot_base = calculer_impot_brut_par_tranche(revenu_imposable, float(adultes))
    demi_parts_enfants = (nombre_parts - adultes) * 2
    avantage_qf_max = PLAFONNEMENT_AVANTAGE_QF_DEMI_PART * demi_parts_enfants
    avantage_qf_reel = impot_base - impot_brut_famille
    if avantage_qf_reel > avantage_qf_max:
        return impot_base - avantage_qf_max
    return impot_brut_famille
def calculer_impot_final(adultes: int, enfants: int, revenus: float) -> (int, int, int):
    """Orchestre le calcul complet de l'impôt."""
    revenu_imposable = calculer_revenu_imposable(revenus)
    nombre_parts = calculer_nombre_parts(adultes, enfants)
    impot_brut = calculer_impot_brut_par_tranche(revenu_imposable, nombre_parts)
    impot_apres_plafonnement = appliquer_plafonnement_qf(revenu_imposable, nombre_parts, adultes, impot_brut)
    # CORRECTION : Si l'impôt est déjà 0, pas de décote ni de réduction.
    if impot_apres_plafonnement == 0:
        return 0, 0, 0
    # --- LOGIQUE CORRIGÉE POUR L'INTERACTION DÉCOTE / RÉDUCTION ---
    decote_calculee = 0.0
    reduction_calculee = 0.0
    impot_a_traiter = impot_apres_plafonnement
    # 1. Déterminer l'éligibilité à la réduction de 20%
    est_eligible_reduction = False
    if adultes >= 2:
        seuil_rfr = SEUIL_RFR_REDUCTION_COUPLE + max(0, (nombre_parts - 2) * 2) * MAJORATION_RFR_REDUCTION_PAR_DEMI_PART
    else:
        seuil_rfr = SEUIL_RFR_REDUCTION_CELIBATAIRE + max(0, (
                nombre_parts - 1) * 2) * MAJORATION_RFR_REDUCTION_PAR_DEMI_PART
    if revenu_imposable < seuil_rfr:
        est_eligible_reduction = True
    # 2. Déterminer l'éligibilité à la décote
    seuil_decote_foyer = SEUIL_DECOTE_COUPLE if adultes >= 2 else SEUIL_DECOTE_CELIBATAIRE
    reduction_theorique = math.ceil(impot_a_traiter * TAUX_REDUCTION_20_POURCENT) if est_eligible_reduction else 0
    if (impot_a_traiter - reduction_theorique) < seuil_decote_foyer:
        decote_calculee = seuil_decote_foyer - (impot_a_traiter * COEFFICIENT_DECOTE)
        decote_calculee = math.ceil(decote_calculee)
        # CORRECTION : La décote retournée ne peut excéder l'impôt qu'elle annule
        decote_calculee = min(decote_calculee, math.ceil(impot_a_traiter))
        impot_a_traiter -= decote_calculee
        impot_a_traiter = max(0.0, impot_a_traiter)
    # 3. Appliquer la réduction de 20% si éligible
    if est_eligible_reduction:
        reduction_calculee = math.ceil(impot_a_traiter * TAUX_REDUCTION_20_POURCENT)
        impot_a_traiter -= reduction_calculee
        impot_a_traiter = max(0.0, impot_a_traiter)
    impot_final = math.floor(impot_a_traiter)
    return impot_final, int(decote_calculee), int(reduction_calculee)
# ==============================================================================
# TESTS UNITAIRES
# ==============================================================================
class TestCalculImpot2019(unittest.TestCase):
    def _verifier_cas(self, adultes, enfants, revenus, attendu):
        impot_attendu, decote_attendue, reduction_attendue = attendu
        impot_calcule, decote_calculee, reduction_calculee = calculer_impot_final(adultes, enfants, revenus)
        self.assertAlmostEqual(impot_calcule, impot_attendu, delta=1, msg=f"Impôt ({impot_calcule} vs {impot_attendu})")
        self.assertAlmostEqual(decote_calculee, decote_attendue, delta=1,
                               msg=f"Décote ({decote_calculee} vs {decote_attendue})")
        self.assertAlmostEqual(reduction_calculee, reduction_attendue, delta=1,
                               msg=f"Réduction ({reduction_calculee} vs {reduction_attendue})")
    def test_cas_1(self): self._verifier_cas(2, 2, 55555, (2815, 0, 0))
    def test_cas_2(self): self._verifier_cas(2, 2, 50000, (1385, 384, 346))
    def test_cas_3(self): self._verifier_cas(2, 3, 50000, (0, 720, 0))
    def test_cas_4(self): self._verifier_cas(1, 2, 100000, (19884, 0, 0))
    def test_cas_5(self): self._verifier_cas(1, 3, 100000, (16782, 0, 0))
    def test_cas_6(self): self._verifier_cas(2, 3, 100000, (9200, 0, 0))
    def test_cas_7(self): self._verifier_cas(2, 5, 100000, (4230, 0, 0))
    def test_cas_8(self): self._verifier_cas(1, 0, 100000, (22986, 0, 0))
    def test_cas_9(self): self._verifier_cas(2, 2, 30000, (0, 0, 0))
    def test_cas_10(self): self._verifier_cas(1, 0, 200000, (64211, 0, 0))
    def test_cas_11(self): self._verifier_cas(2, 3, 200000, (42843, 0, 0))
if __name__ == '__main__':
    print("Lancement des tests unitaires pour le calcul de l'impôt 2019...")
    unittest.main(argv=['first-arg-is-ignored'], exit=False)
```

De nouveau je n’ai pas inspecté ce code. J’ai simplement constaté qu’il passait les 11 tests avec succès.

Mais on peut être curieux de connaître son raisonnement, notamment pour les cas particuliers du calcul de l’impôt. On le lui demande :

<table>
<tr>
<td><img src="img/img_133.png" width="291"></td>
<td></td>
</tr>
</table>
C’est un cas de hauts revenus avec à la fois un plafonnement possible de l’abattement de 10% et un plafonnement possible du quotient familial.

La réponse de Gemini est la suivante :

<table>
<tr>
<td><img src="img/img_134.png" width="442"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_135.png" width="442"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_136.png" width="280"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_137.png" width="432"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_138.png" width="374"></td>
<td></td>
</tr>
</table>
Ces deux dernières copies d’écran sont intéressantes. Gemini utilise une méthode de calcul différente de celle expliquée dans le PDF. On trouve effectivement cette méthode de calcul sur internet. Les deux méthodes sont équivalentes.

<table>
<tr>
<td><img src="img/img_139.png" width="432"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_140.png" width="459"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_141.png" width="442"></td>
<td></td>
</tr>
</table>
L’explication est remarquable par sa clarté. On pourrait la donner telle-quelle à des étudiants pour expliquer la méthode de calcul de l’impôt.

Maintenant prenons un autre exemple cette fois-ci avec des faibles revenus. Dans ce cas, il peut y avoir décote et réduction :

<table>
<tr>
<td><img src="img/img_142.png" width="314"></td>
<td></td>
</tr>
</table>
La réponse de Gemini est la suivante :

<table>
<tr>
<td><img src="img/img_143.png" width="466"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_144.png" width="453"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_145.png" width="246"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_146.png" width="447"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_147.png" width="436"></td>
<td></td>
</tr>
</table>
Ici, on constate que Gemini applique une règle qui n’est pas dans le PDF. Il l’a probablement trouvée sur internet, mais la source est-elle fiable ?

<table>
<tr>
<td><img src="img/img_148.png" width="421"></td>
<td></td>
</tr>
</table>
Ici, Gemini continue d’appliquer une règle inconnue (la règle spéciale ci-dessus).

<table>
<tr>
<td><img src="img/img_149.png" width="426"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_150.png" width="422"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_151.png" width="448"></td>
<td></td>
</tr>
</table>
Donc les résultats de Gemini collent avec le résultat du simulateur officiel des impôts. Mais il a utilisé une règle non présente dans le PDF. Où est l’erreur ? On le lui demande en lui joignant le PDF :

<table>
<tr>
<td><img src="img/img_152.png" width="314"></td>
<td></td>
</tr>
</table>
La réponse de Gemini :

<table>
<tr>
<td><img src="img/img_153.png" width="448"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_154.png" width="426"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_155.png" width="426"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_156.png" width="453"></td>
<td></td>
</tr>
</table>
Je pense que Gemini a raison et que mon PDF est erroné. Pour le vérifier, je lui demande un test :

- Où son raisonnement donnerait les mêmes résultats que le simulateur d’impôt officiel ;
- Où le raisonnement du PDF donnerait lui des résultats différents de ceux du simulateur ;
<table>
<tr>
<td><img src="img/img_157.png" width="308"></td>
<td></td>
</tr>
</table>
La réponse de Gemini est la suivante :

<table>
<tr>
<td><img src="img/img_158.png" width="427"></td>
<td></td>
</tr>
</table>
Ici Gemini se trompe. J’ai lancé le simulateur sur cet exemple et j’ai trouvé la chose suivante :

<table>
<tr>
<td><img src="img/img_159.png" width="382"></td>
<td></td>
</tr>
</table>
Cependant, on va découvrir que le raisonnement de Gemini donne bien les résultats ci-dessus. On continue :

<table>
<tr>
<td><img src="img/img_160.png" width="323"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_161.png" width="403"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_162.png" width="437"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_163.png" width="418"></td>
<td></td>
</tr>
</table>
Très bien. C’est noté. On continue :

<table>
<tr>
<td><img src="img/img_164.png" width="306"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_165.png" width="427"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_166.png" width="442"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_167.png" width="477"></td>
<td></td>
</tr>
</table>
Donc Gemini a trouvé (impôt, décote, réduction)= (431, 325, 1296) alors que le simulateur utilisé par mes soins donne (431, 324, 1297). Donc Gemini a trouvé les bons résultats à 1 euro près mais il ne le sait pas. On le lui dit :

<table>
<tr>
<td><img src="img/img_168.png" width="310"></td>
<td></td>
</tr>
</table>
Gemini répond :

<table>
<tr>
<td><img src="img/img_169.png" width="427"></td>
<td></td>
</tr>
</table>
<table>
<tr>
<td><img src="img/img_170.png" width="432"></td>
<td></td>
</tr>
</table>
Maintenant, on se demande si Gemini pourrait générer un PDF corrigé :

<table>
<tr>
<td><img src="img/img_171.png" width="300"></td>
<td></td>
</tr>
</table>
La réponse de Gemini :

<table>
<tr>
<td><img src="img/img_172.png" width="432"></td>
<td></td>
</tr>
</table>
Gemini ne m’a donc pas donné de lien vers un PDF, mais il a généré un texte pour générer moi-même ce PDF. Bien que ce soit encombrant de donner ici, les copies d’écran du PDF, je le fais pour que le lecteur voie le côté génératif de l’IA :

<table>
<tr>
<td><img src="img/img_173.png" width="173"></td>
<td></td>
</tr>
</table>

<img src="img/img_175.png" width="381">


<img src="img/img_177.png" width="386">


<img src="img/img_179.png" width="345">


<img src="img/img_181.png" width="327">


<img src="img/img_183.png" width="347">


<img src="img/img_185.png" width="366">


<img src="img/img_187.png" width="382">


<img src="img/img_189.png" width="353">


<img src="img/img_191.png" width="386">


<img src="img/img_193.png" width="350">


<img src="img/img_195.png" width="309">


<img src="img/img_197.png" width="394">


<img src="img/img_199.png" width="382">

Honnêtement je n’ai pas vérifié si tout ce qui est dit dans ce PDF est vrai. En tout cas, c’est un document parfait pour un TD, généré en quelques secondes.

Néanmoins, on peut faire vérifier par Gemini lui-même que son PDF est bon. On démarre une nouvelle conversation :

<table>
<tr>
<td><img src="img/img_200.png" width="284"></td>
<td></td>
</tr>
</table>
- en [1], on a mis le PDF généré par Gemini [Le problème selon Gemini.pdf] ;
- en [2], [instructionsAvecPDF2.txt] est identique aux instructions de [instructionsAvecPDF.txt], si ce n’est qu’on a ajouté un douzième test unitaire, celui-là même qui a montré que le PDF initial était erroné :
```python linenums="1"
test12 : (2, 2, 49500) -> (1297, 431, 324)
```

Curieusement il a fallu plusieurs allers-retours avant que Gemini génère le bon script :

Question 2

<table>
<tr>
<td><img src="img/img_201.png" width="306"></td>
<td></td>
</tr>
</table>
Question 3

<table>
<tr>
<td><img src="img/img_202.png" width="183"></td>
<td></td>
</tr>
</table>
Comme il a été fait maintenant plusieurs fois, lorsque le script généré et chargé dans PyCharm échoue, on donne à Gemini le fichier texte des logs de l’exécution. Gemini les comprend très bien.

Question 4

<table>
<tr>
<td><img src="img/img_203.png" width="170"></td>
<td></td>
</tr>
</table>
Question 5

<table>
<tr>
<td><img src="img/img_204.png" width="156"></td>
<td></td>
</tr>
</table>
Question 6 et fin

<table>
<tr>
<td><img src="img/img_205.png" width="399"></td>
<td><img src="img/img_206.png" width="164"></td>
</tr>
</table>
Maintenant nous sommes rassurés sur la validité du PDF généré par Gemini. Les règles de calcul qui y sont données sont correctes.

Nous allons maintenant faire la même chose pour les cinq autres IA mais nous serons très brefs dans nos explications, sauf pour ChatGPT l’IA leader du moment. Ce qui nous intéresse c’est de savoir si l’IA résoud ou non les trois problèmes qu’on lui pose. En effet, les interfaces de toutes ces IA sont très analogues et j’ai procédé avec elles comme avec Gemini. Le lecteur est encouragé à rejouer les conversations Gemini avec l’IA de son choix.
