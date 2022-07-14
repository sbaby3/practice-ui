import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperCarouselComponent } from './wallpaper-carousel.component';

describe('WallpaperCarouselComponent', () => {
  let component: WallpaperCarouselComponent;
  let fixture: ComponentFixture<WallpaperCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallpaperCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallpaperCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
