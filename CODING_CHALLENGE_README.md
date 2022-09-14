# Dokumentation und Anmerkungen

## Doku

- klone Projekt von GitHub und nutze `npm i` + `ng serve`

Die App enthält insgesamt 3 Routes die für dieses Projekt wichtig sind:

- die /users Route : auf dieser befindet sich die Liste der User
- die /userdetails Route : hier ist die Detailansicht enthalten. Die Inputs lassen sich über den Butten enablen
- die /newUser Route: ein Neuer User "kann" der Datenbank hinzugefügt werden.

Module die für die Umsetzung des Projektes genutzt wurden:
`[BrowserModule, AppRoutingModule, HttpClientModule, FormsModule]`

Angewandte Technologien:

- Angular
- TailwindCSS

## Anmerkungen

Nach ca 34 Stunden effektiven Arbeiten mit dem Framework Angular, bin ich zu folgenden Erkenntnissen gekommen:

Der Erstkontakt war wesentlich schwieriger als gedacht. Ich mag die denkweise des Frameworks, speziell hinsichtlich seines OOP Ansatzes und der Art der Datenstrukturierung. Die Umsetzungen betrachte ich an vielen Stellen als durchaus logisch. Als schwer empfinde ich hingegen die tatsächliche Anwendung der Module in ihren Feinheiten.
Die grundlegenden Ansätze, die ich aus React/Next kannte, ließen sich nur teilweise nutzen, da beide eher den funktionalen Weg für sich nutzen und der Umgang mit Code an sich dadruch ein ganz anderer ist. Durch das wegfallen von Hooks, musste ich viele Dinge nochmal neu denken und war froh, dass es gedanklich zumindest einen Ersatz mit der Verbindung von Service und component.ts gab. Ähnlich erging es mir bei der Begegnung mit Resolvern, die einen Hauch von SSR haben und ich diesen Ansatz aus Next sehr interessant fand.
Besonders herausfordernd empfand ich den Umgang mit RxJS und dem HttpModule. RxJS hat viele logische Hintergedanken, allerdings braucht es Zeit und mehrere Anwendungsfälle, um sich mit der Tiefe der Möglichkeiten die reactive programming mit sich bringt, bewusst zu werden.
Was mir widererwartend schwer gefallen ist, ist der Umgang mit den template-forms. Das Prinzip hinter two-way-binding und der Verwendung von `(ngForm)` habe ich verstanden, jedoch reichte die Zeit hinten raus nicht, die Anwendung auch fehlerfrei umzusetzen. Das führte leider dazu, dass ich die CRUD operations ensprechend der gegegebenen Api hardcoden musste, um eine Reaktion durch einem Button herbeizuführen. Reaktive Forms ist ein Thema, zu dem ich im weiteren Selbststudium auch noch kommen möchte.
Die Einbeziehung der Browserkompatibilität, wird nach meinem Kenntnisstand durch die polyfill.ts gewähleistet, welche beim neuen Aufsetzen eines Projektes durch `ng new` automatisch mit geliefert wird. Es besteht die Möglichkeit eigene Polyfills zu ergänzen, aber die Browseranforderung der Aufgabe müssten laut Doku gewährleistet sein: [s. Browser support](https://angular.io/guide/browser-support). Das Aufrufen der Seite über Edge, Firefox und Chrome zeigte bei mir keine Probleme bei der Funktionalität.
Dadurch, dass ich mehr Zeit in das Kennenlernen des Frameworks stecken musste, als ich geplant habe, fehlte mir Zeit, das Projekt mit all seinen Anforderungen zu beenden. Ich werde mich weiter und tiefer mit der Thematik beschäftigen und meine Kenntnisse bis Ende Oktober weiter ausbauen. Ich stehe weiteren Herausforderungen Poitiv gegenüber.
