/*
 * RERO angular core
 * Copyright (C) 2020 RERO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { RecordUiService } from '../record-ui.service';
import { RecordModule } from '../record.module';
import { RecordFilesComponent } from './files.component';

describe('RecordFilesComponent', () => {
  let component: RecordFilesComponent;
  let fixture: ComponentFixture<RecordFilesComponent>;

  const recordUiServiceSpy = jasmine.createSpyObj('RecordUiService', [
    'getResourceConfig',
  ]);
  recordUiServiceSpy.getResourceConfig.and.returnValue({ key: 'documents', files: { enabled: true } });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RecordModule,
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: RecordUiService, useValue: recordUiServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordFilesComponent);
    component = fixture.componentInstance;
    component.type = 'documents';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
