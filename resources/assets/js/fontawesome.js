import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faUnlock } from '@fortawesome/free-solid-svg-icons/faUnlock';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons/faShareAlt';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { faReply } from '@fortawesome/free-solid-svg-icons/faReply';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faUnlink } from '@fortawesome/free-solid-svg-icons/faUnlink';
import { faRecycle } from '@fortawesome/free-solid-svg-icons/faRecycle';
import { faSort } from '@fortawesome/free-solid-svg-icons/faSort';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faRedditSquare } from '@fortawesome/free-brands-svg-icons/faRedditSquare';
import { faPinterestSquare } from '@fortawesome/free-brands-svg-icons/faPinterestSquare';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons/faWhatsappSquare';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faWeixin } from '@fortawesome/free-brands-svg-icons/faWeixin';
import { faSms } from '@fortawesome/free-solid-svg-icons/faSms';
import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype';
import { faHackerNewsSquare } from '@fortawesome/free-brands-svg-icons/faHackerNewsSquare';
import { faMastodon } from '@fortawesome/free-brands-svg-icons/faMastodon';
import { faGetPocket } from '@fortawesome/free-brands-svg-icons/faGetPocket';
import { faFlipboard } from '@fortawesome/free-brands-svg-icons/faFlipboard';
import { faEvernote } from '@fortawesome/free-brands-svg-icons/faEvernote';
import { faTrello } from '@fortawesome/free-brands-svg-icons/faTrello';
import { faBuffer } from '@fortawesome/free-brands-svg-icons/faBuffer';
import { faTumblrSquare } from '@fortawesome/free-brands-svg-icons/faTumblrSquare';
import { faXingSquare } from '@fortawesome/free-brands-svg-icons/faXingSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { fa500px } from '@fortawesome/free-brands-svg-icons/fa500px';
import { faAdobe } from '@fortawesome/free-brands-svg-icons/faAdobe';
import { faAws } from '@fortawesome/free-brands-svg-icons/faAws';
import { faAmazon } from '@fortawesome/free-brands-svg-icons/faAmazon';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faAppStore } from '@fortawesome/free-brands-svg-icons/faAppStore';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faArtstation } from '@fortawesome/free-brands-svg-icons/faArtstation';
import { faAtlassian } from '@fortawesome/free-brands-svg-icons/faAtlassian';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons/faBandcamp';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons/faBitbucket';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons/faBitcoin';
import { faBlogger } from '@fortawesome/free-brands-svg-icons/faBlogger';
import { faChrome } from '@fortawesome/free-brands-svg-icons/faChrome';
import { faCodepen } from '@fortawesome/free-brands-svg-icons/faCodepen';
import { faDev } from '@fortawesome/free-brands-svg-icons/faDev';
import { faDeviantart } from '@fortawesome/free-brands-svg-icons/faDeviantart';
import { faDigitalOcean } from '@fortawesome/free-brands-svg-icons/faDigitalOcean';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faBehance } from '@fortawesome/free-brands-svg-icons/faBehance';
import { faDiscourse } from '@fortawesome/free-brands-svg-icons/faDiscourse';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faDribbble } from '@fortawesome/free-brands-svg-icons/faDribbble';
import { faDropbox } from '@fortawesome/free-brands-svg-icons/faDropbox';
import { faDrupal } from '@fortawesome/free-brands-svg-icons/faDrupal';
import { faEbay } from '@fortawesome/free-brands-svg-icons/faEbay';
import { faEllo } from '@fortawesome/free-brands-svg-icons/faEllo';
import { faEtsy } from '@fortawesome/free-brands-svg-icons/faEtsy';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faFirefox } from '@fortawesome/free-brands-svg-icons/faFirefox';
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma';
import { faFlickr } from '@fortawesome/free-brands-svg-icons/faFlickr';
import { faFoursquare } from '@fortawesome/free-brands-svg-icons/faFoursquare';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab';
import { faGitter } from '@fortawesome/free-brands-svg-icons/faGitter';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons/faGoogleDrive';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons/faHackerrank';
import { faHouzz } from '@fortawesome/free-brands-svg-icons/faHouzz';
import { faImdb } from '@fortawesome/free-brands-svg-icons/faImdb';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faInvision } from '@fortawesome/free-brands-svg-icons/faInvision';
import { faJsfiddle } from '@fortawesome/free-brands-svg-icons/faJsfiddle';
import { faKaggle } from '@fortawesome/free-brands-svg-icons/faKaggle';
import { faKeybase } from '@fortawesome/free-brands-svg-icons/faKeybase';
import { faKickstarter } from '@fortawesome/free-brands-svg-icons/faKickstarter';
import { faLastfm } from '@fortawesome/free-brands-svg-icons/faLastfm';
import { faLeanpub } from '@fortawesome/free-brands-svg-icons/faLeanpub';
import { faMediumM } from '@fortawesome/free-brands-svg-icons/faMediumM';
import { faMeetup } from '@fortawesome/free-brands-svg-icons/faMeetup';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft';
import { faMixcloud } from '@fortawesome/free-brands-svg-icons/faMixcloud';
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm';
import { faOpenid } from '@fortawesome/free-brands-svg-icons/faOpenid';
import { faOsi } from '@fortawesome/free-brands-svg-icons/faOsi';
import { faPatreon } from '@fortawesome/free-brands-svg-icons/faPatreon';
import { faPaypal } from '@fortawesome/free-brands-svg-icons/faPaypal';
import { faPeriscope } from '@fortawesome/free-brands-svg-icons/faPeriscope';
import { faPhp } from '@fortawesome/free-brands-svg-icons/faPhp';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons/faPlaystation';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons/faProductHunt';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import { faStackExchange } from '@fortawesome/free-brands-svg-icons/faStackExchange';
import { faPython } from '@fortawesome/free-brands-svg-icons/faPython';
import { faQuora } from '@fortawesome/free-brands-svg-icons/faQuora';
import { faReadme } from '@fortawesome/free-brands-svg-icons/faReadme';
import { faReddit } from '@fortawesome/free-brands-svg-icons/faReddit';
import { faResearchgate } from '@fortawesome/free-brands-svg-icons/faResearchgate';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons/faRocketchat';
import { faScribd } from '@fortawesome/free-brands-svg-icons/faScribd';
import { faSlack } from '@fortawesome/free-brands-svg-icons/faSlack';
import { faSlideshare } from '@fortawesome/free-brands-svg-icons/faSlideshare';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons/faSnapchat';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
import { faSquarespace } from '@fortawesome/free-brands-svg-icons/faSquarespace';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons/faWordpressSimple';
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam';
import { faStrava } from '@fortawesome/free-brands-svg-icons/faStrava';
import { faTripadvisor } from '@fortawesome/free-brands-svg-icons/faTripadvisor';
import { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faVimeo } from '@fortawesome/free-brands-svg-icons/faVimeo';
import { faWeibo } from '@fortawesome/free-brands-svg-icons/faWeibo';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons/faWikipediaW';
import { faWordpress } from '@fortawesome/free-brands-svg-icons/faWordpress';
import { faXbox } from '@fortawesome/free-brands-svg-icons/faXbox';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';
import { faYahoo } from '@fortawesome/free-brands-svg-icons/faYahoo';
import { faYelp } from '@fortawesome/free-brands-svg-icons/faYelp';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faFileImport } from '@fortawesome/free-solid-svg-icons/faFileImport';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';

export function initFontAwesome () {
  library.add(faPlus);
  library.add(faSave);
  library.add(faSearch);
  library.add(faLock);
  library.add(faUnlock);
  library.add(faEdit);
  library.add(faTrash);
  library.add(faKey);
  library.add(faShareAlt);
  library.add(faEnvelope);
  library.add(faInfo);
  library.add(faTrashAlt);
  library.add(faBookmark);
  library.add(faReply);
  library.add(faLink);
  library.add(faUnlink);
  library.add(faRecycle);
  library.add(faFileImport);
  library.add(faUpload);
  library.add(faSort);

  library.add(faFacebookSquare);
  library.add(faTwitterSquare);
  library.add(faRedditSquare);
  library.add(faPinterestSquare);
  library.add(faWhatsappSquare);
  library.add(faTelegram);
  library.add(faWeixin);
  library.add(faSms);
  library.add(faSkype);
  library.add(faHackerNewsSquare);
  library.add(faMastodon);
  library.add(faGetPocket);
  library.add(faFlipboard);
  library.add(faEvernote);
  library.add(faTrello);
  library.add(faBuffer);
  library.add(faTumblrSquare);
  library.add(faXingSquare);
  library.add(faLinkedin);

  library.add(fa500px);
  library.add(faAdobe);
  library.add(faAws);
  library.add(faAmazon);
  library.add(faAngellist);
  library.add(faAppStore);
  library.add(faApple);
  library.add(faArtstation);
  library.add(faAtlassian);
  library.add(faBandcamp);
  library.add(faBehance);
  library.add(faBitbucket);
  library.add(faBitcoin);
  library.add(faBlogger);
  library.add(faChrome);
  library.add(faCodepen);
  library.add(faDev);
  library.add(faDeviantart);
  library.add(faDigitalOcean);
  library.add(faDiscord);
  library.add(faDiscourse);
  library.add(faDocker);
  library.add(faDribbble);
  library.add(faDropbox);
  library.add(faDrupal);
  library.add(faEbay);
  library.add(faEllo);
  library.add(faEtsy);
  library.add(faFacebookF);
  library.add(faFirefox);
  library.add(faFigma);
  library.add(faFlickr);
  library.add(faFoursquare);
  library.add(faGithub);
  library.add(faGitlab);
  library.add(faGitter);
  library.add(faGoogle);
  library.add(faGooglePlay);
  library.add(faGoogleDrive);
  library.add(faHackerrank);
  library.add(faHouzz);
  library.add(faImdb);
  library.add(faInstagram);
  library.add(faInvision);
  library.add(faJsfiddle);
  library.add(faKaggle);
  library.add(faKeybase);
  library.add(faKickstarter);
  library.add(faLastfm);
  library.add(faLeanpub);
  library.add(faMediumM);
  library.add(faMeetup);
  library.add(faMicrosoft);
  library.add(faMixcloud);
  library.add(faNpm);
  library.add(faOpenid);
  library.add(faOsi);
  library.add(faPatreon);
  library.add(faPaypal);
  library.add(faPeriscope);
  library.add(faPhp);
  library.add(faPinterest);
  library.add(faPlaystation);
  library.add(faProductHunt);
  library.add(faPython);
  library.add(faQuora);
  library.add(faReadme);
  library.add(faReddit);
  library.add(faResearchgate);
  library.add(faRocketchat);
  library.add(faScribd);
  library.add(faSkype);
  library.add(faSlack);
  library.add(faSlideshare);
  library.add(faSnapchat);
  library.add(faSoundcloud);
  library.add(faSpotify);
  library.add(faSquarespace);
  library.add(faStackOverflow);
  library.add(faStackExchange);
  library.add(faSteam);
  library.add(faStrava);
  library.add(faTripadvisor);
  library.add(faTumblr);
  library.add(faTwitch);
  library.add(faTwitter);
  library.add(faVimeo);
  library.add(faWeibo);
  library.add(faWikipediaW);
  library.add(faWordpress);
  library.add(faWordpressSimple);
  library.add(faXbox);
  library.add(faXing);
  library.add(faYahoo);
  library.add(faYelp);
  library.add(faYoutube);

  dom.i2svg();
}

if (document.readyState !== 'loading') {
  initFontAwesome();
} else {
  document.addEventListener('DOMContentLoaded', initFontAwesome);
}
