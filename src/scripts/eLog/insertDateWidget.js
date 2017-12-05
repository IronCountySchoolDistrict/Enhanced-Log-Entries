import $ from 'jquery';
import { initializeDateWidget } from 'psDateWidget';

export default function() {
    $(() => {
        $('#entry_date').addClass('psDateWidget');
        initializeDateWidget();
    });
}