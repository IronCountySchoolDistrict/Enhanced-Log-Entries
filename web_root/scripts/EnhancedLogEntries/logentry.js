/*global $j, require, psData, _*/
function parseJSON(data) {
    'use strict';
    var jsonData = JSON.parse(data);
    jsonData.splice(-1, 1);
    return jsonData;
}

require(['underscore'], function () {
    'use strict';
    $j('body').attr('class', 'yui-skin-sam');

    var boxRoundSelect = $j('.box-round');
    boxRoundSelect.html('');
    var buttonsTemplate = $j($j('#buttons-template').html());
    boxRoundSelect.append(buttonsTemplate);

    var logEntryURI = '/admin/students/data/sqlLogEntry.html?curstudid=' + psData.curStudId + '&teacherid=' + psData.userId;
    $j.get(logEntryURI, function (data) {
        var jsonData = parseJSON(data);
        var context = {
            rows: jsonData
        };
        var dataTableTemplate = $j('#data-table-template').html();
        var renderedTemplate = _.template(dataTableTemplate, context);

        boxRoundSelect.append(renderedTemplate);
    });
});