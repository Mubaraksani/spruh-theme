import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavService } from '../../services/nav.service';
import { SwitcherService } from '../../services/switcher.service';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;
  public isSidebar = false;
  public config: any = {};
  layoutSubscription: Subscription;
  toggleClass = "fe fe-maximize";
  flagvalue;
  countryName;
  langStoreValue;
  defaultFlag!: string;
  listLang = [
    { text: "French", flag: "./assets/img/flags/french_flag.jpg", lang: "fr" },
    { text: "English", flag: "./assets/img/flags/en.svg", lang: "en" },
    { text: "العربية", flag: "./assets/img/flags/pk.svg", lang: "ar" },
    // { text: "Germany", flag: "./assets/img/flags/germany_flag.jpg", lang: "de" },
    // { text: "Spain", flag: "./assets/img/flags/spain_flag.jpg", lang: "de" },
  ];
  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
    public switcherService: SwitcherService,
    private authService : AuthService,
    public languageService: LanguageService,
    private translate: TranslateService
  ) {
    this.layoutSubscription = layoutService.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;
      }
    )
   
  }

  ngOnInit(): void {
    this.langStoreValue = localStorage.getItem("lang");
    const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
    this.countryName = val.map((element) => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.defaultFlag = "./assets/img/flags/en.svg";
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
    }
  }
  categories = [
    { id: 1, name: 'IT Projects' },
    { id: 2, name: 'Business Case' },
    { id: 3, name: 'Microsoft Project' },
    { id: 4, name: 'Risk Management' },
    { id: 5, name: 'Team Building' },
  ]

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }


  toggleSwitcher() {
    let emit:any = false;
    if(emit != !emit) {
      emit = !emit
      this.switcherService.emitSwitcherChange(emit);
    }
  }
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.langStoreValue = lang;
    this.languageService.setLanguage(lang);
  }
  providerLogout() {
    this.authService.providerLogout()
  }
}

