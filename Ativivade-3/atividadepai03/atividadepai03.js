import { LightningElement, api } from 'lwc';

export default class Atividadepai03 extends LightningElement {
    @api ide
    @api firstname;
    @api lastname;
    @api status;
    @api phone;
    @api email;
    @api company;    
    @api annualrevenue;
}