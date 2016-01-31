$(document).ready(() => {


    var textAreas = $("textarea.code");

    for (var i = 0; i < textAreas.length; i++) {
        var ec: CodeMirror.EditorConfiguration = <CodeMirror.EditorConfiguration>{};
        ec.tabSize = 2;
        ec.lineNumbers = true;
        ec.theme = "neat";
        ec.matchBrackets = true;
        var editor = CodeMirror.fromTextArea($(textAreas).get(i) as HTMLTextAreaElement, {
            lineNumbers: true,
            matchBrackets: true,
            theme: "neat"
        });
    }    
});


   