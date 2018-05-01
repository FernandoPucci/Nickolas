/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {
  //Enable Rest operations fom TesteController
  TesteController: {
    'create': true,
    'findOne': true,
    'find': true,
    '*': false
  },
  //Enable Rest operations fom AnexoController
  AnexoController: {
    '*': true
  },
  //Enable Rest operations fom AplicacaoController
  AplicacaoController: {
    '*': true
  },
  //Enable Rest operations fom IncidenteController
  IncidenteController: {
    aplicacoes: true,
    '*': true
  },
  //Enable Rest operations fom ModuloController
  ModuloController: {
    aplicacoes: true,
    '*': true
  },
  //Enable Rest operations fom PtfController
  PtfController: {
    '*': true
  },
  //Enable Rest operations fom PtfModuloController
  PtfModuloController: {
    ptf: true,
    find: true,
    '*': false //disable another verbs
  },
  //Enable Rest operations fom RatingController
  RatingController: {
    'sugestaoerro' : true,
    '*': true
  },
  //Enable Rest operations fom SugestaoController
  SugestaoController: {
    'incidente': true,
    '*': true
  },
  //Enable Rest operations fom SugestaoIncidenteController
  SugestaoIncidenteController: {
    '*': true
  },
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions (`true` allows public     *
   * access)                                                                  *
   *                                                                          *
   ***************************************************************************/

  // '*': true,

  /***************************************************************************
   *                                                                          *
   * Here's an example of mapping some policies to run before a controller    *
   * and its actions                                                          *
   *                                                                          *
   ***************************************************************************/
  // RabbitController: {

  // Apply the `false` policy as the default for all of RabbitController's actions
  // (`false` prevents all access, which ensures that nothing bad happens to our rabbits)
  // '*': false,

  // For the action `nurture`, apply the 'isRabbitMother' policy
  // (this overrides `false` above)
  // nurture	: 'isRabbitMother',

  // Apply the `isNiceToAnimals` AND `hasRabbitFood` policies
  // before letting any users feed our rabbits
  // feed : ['isNiceToAnimals', 'hasRabbitFood']
  // }
};
