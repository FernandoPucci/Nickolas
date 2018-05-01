import { StringUtil } from './../helpers/string-util';
export class MessageBll {

    // get message list based on list of incidents
    public static FormatWelcomeMessage(_incidentsList: [{}]): string {
        let incident: any;

        if (_incidentsList != null && _incidentsList.length > 0) {
            incident = _incidentsList[0];
        } else {
            return 'Para esta aplicação ainda não possuo nenhum incidente conhecido cadastrado.';
        }
        return 'Para ' + incident.desc_modulo.toUpperCase() + ' - ' + incident.modulo.toUpperCase() + ', '
            + incident.aplicacao.toUpperCase() + ', conheço o' + StringUtil.Pluralize(_incidentsList.length > 1) +
            ' incidente' + StringUtil.Pluralize(_incidentsList.length > 1) + ' ao lado. Clique para uma descrição. ';


    }

    public static SimpleIncidentChoose(_simpleMessage: string) {

        return 'Certo, ' + (_simpleMessage != null ? _simpleMessage.toUpperCase() + ' é ' : '') + ' o que está ocorrendo? Responda.';
    }

    public static AnotherIncidentChoose(_simpleAnotherMessage: string) {
        return 'Tudo bem escolha outra :) ' + _simpleAnotherMessage;
    }

}
