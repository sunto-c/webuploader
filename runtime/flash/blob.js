/**
 * @fileOverview Blob Html实现
 */



var FlashRuntime = require('./runtime');
var Blob = require('../../lib/blob');
module.exports = FlashRuntime.register('Blob', {
    slice: function (start, end) {
        var blob = this.flashExec('Blob', 'slice', start, end);
        return new Blob(blob.uid, blob);
    }
});;