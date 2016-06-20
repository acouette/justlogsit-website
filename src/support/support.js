/**
 * Created by acouette on 05/06/16.
 */
angular.module('justlogsit')
    .controller('SupportCtrl', ['$translate', '$scope', '$rootScope', function ($translate, $scope, $rootScope) {
        $scope.currentLang = $translate.use();
        $rootScope.$on('$translateChangeSuccess', function () {
            $scope.currentLang = $translate.use();
        });
    }]);

translations['en']['support'] = {
    "mainHeader": "Guides de démarrage",
    "mainDescription1": "Vous trouverez ici les guides vous permettant de prendre en main JustLogsIt",
    "mainDescription2": "Pour une demande d'information complémentaire ou signaler une anomalie, merci de",
    "contactUs": "nous contacter",
    "feature": "Fonctions du logiciel",
    "featureInput": "Flux de Réception, entrée dans le site",
    "featureInputDiagram": "Schéma des Entrées",
    "featureInputDiagramFile": "Schéma des entrées - fr.pdf",
    "featureInputExpected": "Réception sur entrée attendue",
    "featureInputInputAndValidation": "Saisie des entrées et validation des mouvements",
    "featureInputRF": "Fonctions RF pour les entrées",
    "featureOutput": "Flux de Distribution, sortie du site",
    "featureOutputOL": "Gestion des OL",
    "featureOutputDiagram": "Schéma des Sorties",
    "featureOutputDiagramFile": "Schéma des sorties - fr.pdf",
    "featureOutputPrepare": "Sélection et lancement de la préparation",
    "featureOutputPickup": "Prélèvements",
    "featureOutputDelivery": "Gestion des tournées, chargement et expédition",
    "featureStock": "Gestion du stock",
    "featureStockManagement": "Gestion du stock",
    "featureStockState": "Etat du stock et historique des mouvements",
    "featureStockTransfer": "Transferts et ajustements",
    "featureStockInventory": "Inventaires",
    "configuration": "Configuration du logiciel",
    "configurationParams": "Paramètres de base",
    "configurationParamsDoc": "Paramètres de base",
    "configurationParamsDocFile": "new_site_wizard-en.mp4",
    "configurationParamsAssistant": "Assistant Nouveau Site",
    "configurationMasters": "Fichiers maîtres",
    "configurationMastersDoc": "Fichiers maîtres",
    "configurationMastersArticle": "Fiche Article",
    "configurationMastersLocation": "Emplacements",
    "configurationMastersAffectation": "Affectation picking",
    "interfaces": "Interfaces",
    "interfacesDoc": "Interfaces",
    "interfacesTrade": "Techniques d’échange",
    "interfacesDemo": "Démonstration Interface",
    "workInProgress": "bientôt disponible"

};


translations['fr']['support'] = {

    "mainHeader": "Guides de démarrage",
    "mainDescription1": "Vous trouverez ici les guides vous permettant de prendre en main JustLogsIt",
    "mainDescription2": "Pour une demande d'information complémentaire ou signaler une anomalie, merci de",
    "contactUs": "nous contacter",
    "feature": "Fonctions du logiciel",
    "featureInput": "Flux de Réception, entrée dans le site",
    "featureInputDiagram": "Schéma des Entrées",
    "featureInputDiagramFile": "Schéma des entrées - fr.pdf",
    "featureInputExpected": "Réception sur entrée attendue",
    "featureInputInputAndValidation": "Saisie des entrées et validation des mouvements",
    "featureInputRF": "Fonctions RF pour les entrées",
    "featureOutput": "Flux de Distribution, sortie du site",
    "featureOutputOL": "Gestion des OL",
    "featureOutputDiagram": "Schéma des Sorties",
    "featureOutputDiagramFile": "Schéma des sorties - fr.pdf",
    "featureOutputPrepare": "Sélection et lancement de la préparation",
    "featureOutputPickup": "Prélèvements",
    "featureOutputDelivery": "Gestion des tournées, chargement et expédition",
    "featureStock": "Gestion du stock",
    "featureStockManagement": "Gestion du stock",
    "featureStockState": "Etat du stock et historique des mouvements",
    "featureStockTransfer": "Transferts et ajustements",
    "featureStockInventory": "Inventaires",
    "configuration": "Configuration du logiciel",
    "configurationParams": "Paramètres de base",
    "configurationParamsDoc": "Paramètres de base",
    "configurationParamsDocFile": "new_site_wizard-en.mp4",
    "configurationParamsAssistant": "Assistant Nouveau Site",
    "configurationMasters": "Fichiers maîtres",
    "configurationMastersDoc": "Fichiers maîtres",
    "configurationMastersArticle": "Fiche Article",
    "configurationMastersLocation": "Emplacements",
    "configurationMastersAffectation": "Affectation picking",
    "interfaces": "Interfaces",
    "interfacesDoc": "Interfaces",
    "interfacesTrade": "Techniques d’échange",
    "interfacesDemo": "Démonstration Interface",
    "workInProgress": "bientôt disponible"
};