# Dokumentation und Anmerkungen

## Doku

- klone Projekt von GitHub und nutze `npm i`

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

Der Erstkontakt mit dem Framework was wesentlich schwieriger als gedacht und gehofft. Ich mag die denkweise des Frameworks und finde die Umsetzungen an vielen Stellen durchaus logisch, als schwer empfinde ich hingegen die tatsächliche Anwendung der Module in ihren Feinheiten.
Besonders herausfordernd empfand ich den Umgang mit RxJS und dem HttpModule. RxJS hat noch viele logsiche Anteile, allerdings hat es auch was von einem Kaninchenbau, in dem man schnell die Übersicht verliert und man verschiedene Fälle gesehen haben muss um sich damit wohl zu fühlen.
Was mir widererwartend schwer gefallen ist der Umgang mit den templateForms. Hier bin ich davon ausgegangen, dass es wesentlich leichter ist, damit umzugehen. Ich hatte auch was zu den reactice forms gelesen, aber bis zu diesem Punkt bin ich bisher noch nicht gekommen.
Die Einbeziehung der Browserkompatibilität, wird nach meinem Kenntnisstand durch die polyfill.ts gewähleistet, welche beim neuen aufsetzen durch `ng new` automatisch mit aufgesetzt wird. Es besteht die Möglichkeit eigene Polyfills zu ergänzen, aber die Broweranforderung der Aufgabe müssten laut Doku gewährleistet sein: [s. Browser support](https://angular.io/guide/browser-support).
Dadurch, dass ich mehr Zeit in das Kennenlernen des Frameworks stecken musste, als ich angenommen habe, hat die Zeit bislang nur bis zu diesem Punkt gereicht. Ich würde mich aber gern weiter damit beschäftigen und kann mir vorstellen, dass sich mit etwas mehr Zeit auch die kenntnisbedingten Schwächen in meinem Projekt noch ausbessern lassen, wenn ich die Gelegenheit dazu bekomme.
