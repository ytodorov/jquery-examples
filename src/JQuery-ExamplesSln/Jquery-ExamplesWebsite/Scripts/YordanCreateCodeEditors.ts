$(document).ready(() => {

    var textAreas = $("textarea.code");

    for (var i = 0; i < textAreas.length; i++) {
        debugger;
        var ec: CodeMirror.EditorConfiguration = <CodeMirror.EditorConfiguration>{};
        ec.tabSize = 2;
        ec.lineNumbers = true;
        ec.theme = "neat";
        ec.matchBrackets = true;
        debugger;
        var editor = CodeMirror.fromTextArea($(textAreas).get(i) as HTMLTextAreaElement, {
            lineNumbers: true,
            matchBrackets: true,
            theme: "neat"
        });
    }    
});


   