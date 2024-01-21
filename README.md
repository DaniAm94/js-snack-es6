# Snack Array Methods
## nome repo: js-snack-es6
### SNACK 1
    Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
    Ci ha lasciato il nome del tavolo  e la lista degli invitati in ordine di posto.
- const tableName = 'Tavolo Vip';

- const guests = [
  - 'Brad Pitt',
  - 'Johnny Depp',
  - 'Lady Gaga',
  - 'Cristiano Ronaldo',
  - 'Georgina Rodriguez',
  - 'Chiara Ferragni',
  - 'Fedez',
  - 'George Clooney',
  - 'Amal Clooney',
  - 'Maneskin'
- ];
- Per stampare il tutto,  la tipografia  vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: 
    1. nome del tavolo
    2. nome dell'ospite 
    3. posto occupato.
- Generiamo questo array in una variabile guestsList e stampiamolo in console
### SNACK 2
    Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
    Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3. Dobbiamo stampare le targhe col nome degli studenti: 
    - creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);

#### Questo è l'elenco degli studenti:
    - Id|Name|Grades
    - 213|Marco della Rovere|78
    - 110|Paola Cortellessa|96
    - 250|Andrea Mantegna|48
    - 145|Gaia Borromini|74
    - 196|Luigi Grimaldello|68
    - 102|Piero della Francesca|50
    - 120|Francesca da Polenta|84

### SNACK 3
    1. Creare un array di oggetti:
    2. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
        - marca
        - peso
    3. Stampare in console la bici con peso minore utilizzando il destructuring
    
### SNACK 4
    1. Creare un array di oggetti di squadre di calcio.
    2. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    3. Il nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.
    4. Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
    5. Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

### SNACK 5
    Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna, varietà, peso e lunghezza.
    Calcola il peso totale delle zucchine

### SNACK 6
    Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno di 15cm e più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi di zucchine

### SNACK 7
    Scrivi una funzione che accetti una stringa come argomento e la restituista girata (es. Ciao -> oaiC)

### SNACK 8
    Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
    es. [a,b,c], [1,2,3] --> [a,1,b,2,c,3]

### SNACK 9
    Scrivi una funzione che accetti tre argomenti: un'array e due numeri ('a' più piccolo di 'b' e 'b' grande al massimo quanto il numero di elementi dell'array).
    La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra 'a' e 'b'.
