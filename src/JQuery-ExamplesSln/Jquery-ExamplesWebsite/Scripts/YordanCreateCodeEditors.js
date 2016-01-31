$(document).ready(function () {
    var textAreas = $("textarea.code");
    for (var i = 0; i < textAreas.length; i++) {
        var ec = {};
        ec.tabSize = 2;
        ec.lineNumbers = true;
        ec.theme = "neat";
        ec.matchBrackets = true;
        var editor = CodeMirror.fromTextArea($(textAreas).get(i), {
            lineNumbers: true,
            matchBrackets: true,
            theme: "neat"
        });
    }
});
//# sourceMappingURL=YordanCreateCodeEditors.js.map